'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusAccordion component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');


/**
 * Render logic for pdPlusAccordions component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();

    model.accodionItem = content.accodionItem ? content.accodionItem : '';
    model.accordionDetail = content.accordionDetail ? content.accordionDetail : '';
    
    model.collapsibleActive = content.collapsibleActive ? 'active' : '';

    return new Template('experience/components/pd_assets/pdPlusAccordion').render(model).text;
};
