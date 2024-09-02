'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');

/**
 * Render logic for the pd_layouts.pdPlusTabsLayout.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var component = context.component;

    var content = context.content;
    
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    
    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusTextImageLayout').render(model).text;
};