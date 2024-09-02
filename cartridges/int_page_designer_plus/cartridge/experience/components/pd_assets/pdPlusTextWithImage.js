'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');
/**
 * Render logic for the storefront.photoTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    /* Image File Uploader */
    if (content.imgFile) {
        /* Image File Alt Text */
        model.imgAlt = content.imgAlt ? content.imgAlt : null;

        model.imgFile = {
            src: {
                mobile: ImageTransformation.url(content.imgFile, { device: 'mobile' }),
                desktop: ImageTransformation.url(content.imgFile, { device: 'desktop' })
            },
            alt: content.imgAlt,
            focalPointX: (content.imgFile.focalPoint.x * 100) + '%',
            focalPointY: (content.imgFile.focalPoint.y * 100) + '%'
        };
    }

    model.headingText = content.headingText ? content.headingText : '';
    model.richText = content.richText ? content.richText : '';
    
    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = 'javascript:void(0)';
    }

    if(content.buttonText) {
        model.buttonText = content.buttonText;
    }

    return new Template('experience/components/pd_assets/pdPlusTextWithImage').render(model).text;
};
