'use strict';

/**
 * Script file for rendering an pd_assets.pdPlusContentAsset component
 */

/* Initialize constants */
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');


/**
 * Render logic for pdPlusContentAsset component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
    var content = context.content;
    var model = new HashMap();

    model.contentassetID = content.contentassetID;
    model.cssClassName = content.cssClassName;

    return new Template('experience/components/pd_assets/pdPlusContentAsset').render(model).text;
};
