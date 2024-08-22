'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for the module feature component.
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    model.customClass = content.customClass ? content.customClass : '';
    model.horizontalAlignment = content.horizontalAlignment ? content.horizontalAlignment : 'horizontal-left';
    model.verticalAlignment = content.verticalAlignment ? content.verticalAlignment : 'vertical-top';
    model.featureHeading = content.featureHeading ? content.featureHeading :null;
    model.featureDesc = content.featureDesc ? content.featureDesc : null;
    model.minWidth = content.minWidth ? content.minWidth : null;

    model.animationType = content.animationType ? content.animationType : '';
    model.animationDuration = content.animationDuration ? content.animationDuration : '';

    if (content.moduleLink) {
        model.moduleLink = content.moduleLink;
    } else {
        model.moduleLink = 'javascript:void(0)';
    }

    model.moduleNewtab = content.moduleNewtab;

    /* Vertical Position of text Container if found then concatenate its Class Name */
    if (content.captionYalignment === 'top') {
        model.captionYalignment = 'start';
    } else if (content.captionYalignment === 'center') {
        model.captionYalignment = 'center';
    } else if (content.captionYalignment === 'bottom') {
        model.captionYalignment = 'end';
    }

    /* Horizontal Position of text Container if found then concatenate its Class Name */
    if (content.captionXalignment === 'left') {
        model.captionXalignment = 'start';
    } else if (content.captionXalignment === 'center') {
        model.captionXalignment = 'center';
    } else if (content.captionXalignment === 'right') {
        model.captionXalignment = 'end';
    }

    
    /*Caption Heading Style */
    model.hConfigBanner = {
        font1: content.hFont1 ? content.hFont1 : null,
        fontSize1: content.hfontTextSize ? content.hfontTextSize : '1em',
        marginHeading1: content.hfontMargin ? content.hfontMargin : '0',
        paddingHeading1: content.hfontPadding ? content.hfontPadding : '0',
        fontColor1: content.hFontColor1 ? content.hFontColor1 : '#000',
        fontWeight1: content.hFontWeight1 ? content.hFontWeight1 : null,
        fontShadow1: content.hFontShadow ? content.hFontShadow : null,
        fontSpacing1: content.hLetterSpacing ? content.hLetterSpacing : null,
        fontHeight1: content.hLineHeight ? content.hLineHeight : null
    };

    /*Caption paragraph Style */
    model.paraConfigBanner = {
        font2: content.paraFont ? content.paraFont : null,
        fontSize2: content.paraTextSize ? content.paraTextSize : '1em',
        marginHeading2: content.paraMargin ? content.paraMargin : '0',
        paddingHeading2: content.paraPadding ? content.paraPadding : '0',
        fontColor2: content.paraColor ? content.paraColor : '#000',
        fontWeight2: content.paraWeight ? content.paraWeight : null,
        paraShadow2: content.paraFontShadow ? content.paraFontShadow : null,
        paraFontSpacing2: content.paraLetterSpacing ? content.paraLetterSpacing : null,
        paraFontHeight2: content.paraLineHeight ? content.paraLineHeight : null,
    };

    /* Asset Heading 1 Style */
    
    model.h1Configurations = {
        font: content.h1Font ? content.h1Font : null,
        fontSize: content.fontTextSize ? content.fontTextSize : '1em',
        marginHeading: content.fontMargin ? content.fontMargin : '0',
        paddingHeading: content.fontPadding ? content.fontPadding : '0',
        fontColor: content.h1FontColor ? content.h1FontColor : '#000',
        fontWeight: content.h1FontWeight ? content.h1FontWeight : null,
        fontShadow: content.h1FontShadow ? content.h1FontShadow : null,
        fontSpacing: content.h1LetterSpacing ? content.h1LetterSpacing : null,
        fontHeight: content.h1LineHeight ? content.h1LineHeight : null
    };

   /* Asset Paragraph 1 Style */
    model.para1Configurations = {
        font: content.para1Font ? content.para1Font : null,
        fontSize: content.para1TextSize ? content.para1TextSize : '1em',
        marginHeading: content.para1Margin ? content.para1Margin : '0',
        paddingHeading: content.para1Padding ? content.para1Padding : '0',
        fontColor: content.para1Color ? content.para1Color : '#000',
        fontWeight: content.para1Weight ? content.para1Weight : null,
        para1Shadow: content.para1FontShadow ? content.para1FontShadow : null,
        paraFontSpacing: content.para1LetterSpacing ? content.para1LetterSpacing : null,
        paraFontHeight: content.para1LineHeight ? content.para1LineHeight : null,
    };


    /*Add Laxes Animation and its Class Name */
    model.AnimationLax = content.AnimationLax === 'Animate Image' ? 'animate-img' : content.AnimationLax === 'Column Animate Up' ? 'col-animate-up' : content.AnimationLax === 'Column Animate Down' ? 'col-animate-down' : '';

    model.featureImgWidth = content.featureImgWidth ? content.featureImgWidth: null;
    model.featureIcon = content.featureIcon ? content.featureIcon.file.url : null;
    model.iconAlt = content.iconAlt ? content.iconAlt: 'icon alt';
    model.featureImage = content.featureImage ? content.featureImage.file.url : null;
    model.imgAlt = content.imgAlt ? content.imgAlt: 'image alt';
    model.featureImgDesc = content.featureImgDesc ? content.featureImgDesc : null;

    model.moduleBannerWidth = content.moduleBannerWidth ? content.moduleBannerWidth: null;
    model.moduleBannerImage = content.moduleBannerImage ? content.moduleBannerImage.file.url : null;
    model.moduleImgAlt = content.moduleImgAlt ? content.moduleImgAlt: 'image alt';
    model.moduleDesc = content.moduleDesc ? content.moduleDesc : null;
    model.moduleTitle = content.moduleTitle ? content.moduleTitle : null;

    /*Button Style */
    model.assetCTABorderRadius = content.assetCTABorderRadius ? content.assetCTABorderRadius : '0px';
    model.assetCTALabel = content.assetCTALabel ? content.assetCTALabel : null;
    model.assetCTATitle = content.assetCTATitle ? content.assetCTATitle : null;
    model.assetCTAURL = content.assetCTAURL ? content.assetCTAURL : null;

    model.assetCTABgColor = content.assetCTABgColor ? content.assetCTABgColor : '#ee2e23';
    model.assetCTATextColor = content.assetCTATextColor ? content.assetCTATextColor : '#ffffff';

    model.assetCTAHoverBgColor = content.assetCTAHoverBgColor ? content.assetCTAHoverBgColor : '#ee2e23';
    model.assetCTAHoverTextColor = content.assetCTAHoverTextColor ? content.assetCTAHoverTextColor : '#ffffff';
    
    model.BGImageProperties = 'style="';
    if (content.backgroundImage) {
        model.BGImageProperties += 'background-image: url(' + content.backgroundImage.file.url + ');';
    }


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
    model.UILayout += ';"';
   
    return new Template('experience/components/pd_assets/pdPlusStaticContent').render(model).text;
};
