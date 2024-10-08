'use strict';

window.jQuery = require('jquery');
window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('./components/menu'));
    processInclude(require('./components/cookie'));
    processInclude(require('./components/consentTracking'));
    processInclude(require('./components/footer'));
    processInclude(require('./components/miniCart'));
    processInclude(require('./components/collapsibleItem'));
    processInclude(require('./components/search'));
    processInclude(require('./components/clientSideValidation'));
    processInclude(require('./components/countrySelector'));
    processInclude(require('./components/toolTip'));

    processInclude(require('./experience/tabsComponent'));
    processInclude(require('./experience/pdPlusAccordion'));
});

require('./thirdParty/bootstrap');
require('./components/spinner');
