'use strict';

/**
 * @namespace CheckoutServices
 */

var server = require('server');
var base = module.superModule;
server.extend(base);

var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var loginHelpers = require('*/cartridge/scripts/helpers/loginHelpers');
var apiCsrfProtection = require('dw/web/CSRFProtection');
var Resource = require('dw/web/Resource');

/**
 * Validates the given form and creates response JSON if there are errors.
 * @param {string} form - the customer form to validate
 * @return {Object} validation result
 */
function validateCustomerForm(form) {
    var COHelpers = require('*/cartridge/scripts/checkout/checkoutHelpers');

    var result = COHelpers.validateCustomerForm(form);

    if (result && result.formFieldErrors.length) {
        result.customerForm.clear();
        // prepare response JSON with form data and errors
        result.json = {
            form: result.customerForm,
            fieldErrors: result.formFieldErrors,
            serverErrors: [],
            error: true
        };
    }

    return result;
}

/**
 * Handle Ajax registered customer form submit.
 */
server.replace(
    'LoginCustomer',
    server.middleware.https,
    csrfProtection.validateAjaxRequest,
    function (req, res, next) {
        // validate registered customer form
        var coRegisteredCustomerForm = server.forms.getForm(
            'coRegisteredCustomer'
        );
        var result = validateCustomerForm(coRegisteredCustomerForm);
        if (result.json) {
            res.json(result.json);
            return next();
        }

        // login the registered customer
        var customerForm = result.customerForm;
        var formFieldErrors = result.formFieldErrors;
        try {
            loginHelpers.loginShopper({
                username: customerForm.email.htmlValue,
                password: customerForm.password.htmlValue,
                isRememberMeChecked: false,
                ipAddress: req.remoteAddress,
                responseObj: res.base
            });
        } catch (e) {
            var loginError = loginHelpers.parseLoginError(e);
            if (loginError !== loginHelpers.ENUM_LOGIN_ERROR.UNKNOWN_ERROR) {
                res.json({
                    form: customerForm,
                    fieldErrors: formFieldErrors,
                    serverErrors: [],
                    customerErrorMessage: Resource.msg(
                        'error.message.login.wrong',
                        'checkout',
                        null
                    ),
                    error: true
                });
            }
            return next();
        }

        // on login the session transforms so we need to retrieve new tokens
        var csrfToken = apiCsrfProtection.generateToken();

        // eslint-disable-next-line no-shadow
        this.on('route:BeforeComplete', function (req, res) {
            var AccountModel = require('*/cartridge/models/account');
            var URLUtils = require('dw/web/URLUtils');
            var CustomerMgr = require('dw/customer/CustomerMgr');
            var accountModel = new AccountModel(
                CustomerMgr.getCustomerByLogin(customerForm.email.value)
            );
            var redirectUrl = URLUtils.https(
                'Checkout-Begin',
                'stage',
                'shipping'
            )
                .abs()
                .toString();
            res.json({
                customer: accountModel,
                error: false,
                csrfToken: csrfToken,
                redirectUrl: redirectUrl
            });
        });
        return next();
    }
);

module.exports = server.exports();
