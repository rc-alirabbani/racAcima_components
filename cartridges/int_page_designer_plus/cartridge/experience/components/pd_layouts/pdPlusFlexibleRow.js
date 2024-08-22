'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for storefront.productTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;
    var component = context.component;

    model = content;

    model.customClass = content.customClass ? content.customClass : '';
    model.parallaxSection = content.parallaxSection ? content.parallaxSection : '';
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : 'transparent';
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.orderColumns = content.orderColumns ? content.orderColumns : 'order-left-to-right';
    model.horizontalAlignment = content.horizontalAlignment ? content.horizontalAlignment : 'horizontal-left';
    model.verticalAlignment = content.verticalAlignment ? content.verticalAlignment : 'vertical-top';

    model.BGImageProperties = 'style="' +
        (content.backgroundImage ? 'background-image: url(' + content.backgroundImage.file.url + '); ' : '') +
        (content.bgGradiant ? 'background-image: ' + content.bgGradiant + '; ' : '') +
        (content.sectionHeight ? 'min-height: ' + content.sectionHeight + '; ' : '') +
        (content.backgroundColor ? 'background-color: ' + content.backgroundColor.value + '; ' : '') +
    '"';
    
    model.containerConfigurations = {
        removeGutter: content.removeGutter ? content.removeGutter : '',
        colDefault: content.colDefault ? content.colDefault : '',
        calForTablet: content.calForTablet ? content.calForTablet : '',
        calForMobile: content.calForMobile ? content.calForMobile : '',
        colForDesktop: content.colForDesktop ? content.colForDesktop : '',
        colForXLDesktop: content.colForXLDesktop ? content.colForXLDesktop : ''
    };
    

    /* Margin | Padding Settings */
    model.UILayout = 'style="';
    model.UILayout += 'padding-top: ' + (content.setPaddingTop ? content.setPaddingTop : '0');
    model.UILayout += '; padding-right: ' + (content.setPaddingRight ? content.setPaddingRight : '0');
    model.UILayout += '; padding-bottom: ' + (content.setPaddingBottom ? content.setPaddingBottom : '0');
    model.UILayout += '; padding-left: ' + (content.setPaddingLeft ? content.setPaddingLeft : '0');
    model.UILayout += '; margin-top: ' + (content.setMarginTop ? content.setMarginTop : '0');
    model.UILayout += '; margin-right: ' + (content.setMarginRight ? content.setMarginRight : '0');
    model.UILayout += '; margin-bottom: ' + (content.setMarginBottom ? content.setMarginBottom : '0');
    model.UILayout += '; margin-left: ' + (content.setMarginLeft ? content.setMarginLeft : '0');
    model.UILayout += '; border-bottom: ' + (content.setBorderBottom ? content.setBorderBottom : '0');
    model.UILayout += '; border-top: ' + (content.setBorderTop ? content.setBorderTop : '0');
    model.UILayout += ';"';

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusFlexibleRow').render(model).text;
};
