'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for the module feature component.
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    /** Module icon Content */
    model.featureHeading = content.featureHeading ? content.featureHeading :null;
    model.featureDesc = content.featureDesc ? content.featureDesc : null;
    model.featureIcon = content.featureIcon ? content.featureIcon.file.url : null;
    model.iconAlt = content.iconAlt ? content.iconAlt: 'icon alt';
    model.moduleNewtab = content.moduleNewtab;

    if (content.moduleLink) {
        model.moduleLink = content.moduleLink;
    } else {
        model.moduleLink = 'javascript:void(0)';
    }

    /** Module Banner Content */
    model.featureImage = content.featureImage ? content.featureImage.file.url : null;
    model.imgAlt = content.imgAlt ? content.imgAlt: 'image alt';
    model.moduleHeading = content.moduleHeading ? content.moduleHeading : null;
    model.featureImgDesc = content.featureImgDesc ? content.featureImgDesc : null;
    /*Button Style */
    model.assetCTALabel = content.assetCTALabel ? content.assetCTALabel : null;
    model.assetCTATitle = content.assetCTATitle ? content.assetCTATitle : null;
    model.assetCTAURL = content.assetCTAURL ? content.assetCTAURL : null;


    /** Module Banner with Caption */
    model.moduleBannerImage = content.moduleBannerImage ? content.moduleBannerImage.file.url : null;
    model.moduleImgAlt = content.moduleImgAlt ? content.moduleImgAlt: 'image alt';
    model.moduleDesc = content.moduleDesc ? content.moduleDesc : null;
    model.moduleTitle = content.moduleTitle ? content.moduleTitle : null;
   
    return new Template('experience/components/pd_assets/pdPlusStaticContent').render(model).text;
};
