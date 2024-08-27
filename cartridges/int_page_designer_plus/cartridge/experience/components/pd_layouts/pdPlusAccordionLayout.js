'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');


/**
 * Render logic for the pd_layouts.pdPlusGrid1row1column.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();
    var component = context.component;

    model.isContainer = content.isContainer ? 'container-fluid' : 'container';

    model.regions = PageRenderHelper.getRegionModelRegistry(component);
   
    return new Template('experience/components/pd_layouts/pdPlusAccordionLayout').render(model).text;
};
