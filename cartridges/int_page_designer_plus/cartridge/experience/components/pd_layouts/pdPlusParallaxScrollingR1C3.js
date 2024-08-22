'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');


/**
 * Render logic for the pd_layouts.pdPlusGrid 2 Row x 1 Col (Mobile), PD Plus 1 Row x 2 Col (Desktop)
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var component = context.component;

    var content = context.content;
    model.isContainer = content.isContainer ? 'container-fluid' : 'container';
    model.bgOverlay = content.bgOverlay ? content.bgOverlay : '';
    model.customCss = content.customCss ? content.customCss : '';

    model.animationType = content.animationType ? content.animationType : '';
    model.animationDuration = content.animationDuration ? content.animationDuration : '';

    model.bgComponentColor = 'style="';
    if (content.backgroundColor) {
        model.bgComponentColor += 'background-color: ' + content.backgroundColor.value + '; ';
    }
    if (content.backgroundColorAlpha) {
        model.bgComponentColor += 'opacity: ' + content.backgroundColorAlpha + '%;';
    }

    if (content.bgGradiant) {
        model.bgComponentColor += 'background-image: ' + content.bgGradiant + '; ';
    }
    model.bgComponentColor += '"';


    
    /* Layout  */

    /* parallax SectionHeight  */
    model.sectionHeight = content.sectionHeight ? content.sectionHeight : '';
    /* parallax Section Type  */

    if (content.parallaxSection === 'Parallax') {
        model.parallaxSection = 'section-background';
    } else if (content.parallaxSection === 'Normal') {
        model.parallaxSection = 'sectionFixed';
    }

    /* shadow on text  */
    if (content.textShadow === 'Text White Shadow') {
        model.textShadow = 'txt-white-shadow';
    } else if (content.textShadow === 'Text Black Shadow') {
        model.textShadow = 'txt-black-shadow';
    }

    /*Column 3 */


    model.ParallaxScrTextSectionR1C3C3 = content.ParallaxScrTextSectionR1C3C3? content.ParallaxScrTextSectionR1C3C3 : '';
    model. ParallaxScrHdSectionR1C3 = content.ParallaxScrHdSectionR1C3 ? content.ParallaxScrHdSectionR1C3 : null;
    model.ParallaxScrbtnR1C3C3 = content.ParallaxScrbtnR1C3C3? content.ParallaxScrbtnR1C3C3 : null;
    model.TextSectionPaddingR1C3 = content.TextSectionPaddingR1C3 ? content.TextSectionPaddingR1C3 : '';
    
    /* add color on column3 text */

    /* parallax Section Text Color  */
   
    model.textContentColorR1C3 = 'style="';

    if (content.textColorR1C3C3) {
        model.textContentColorR1C3 += 'color: ' + content.textColorR1C3C3.value + '; ';
    }
    
    model.textContentColorR1C3 += '"';



    /* New Tab */
    if (content.tileLinkR1C3C3) {
        model.tileLinkR1C3C3 = content.tileLinkR1C3C3;
    } else {
        model.tileLinkR1C3C3 = 'javascript:void(0)';
    }
    model.tileNewtabR1C3C3 = content.tileNewtabR1C3C3;
    model.buttontext = content.buttontext;

    /* parallax Button  Color  */

    model.btnComponentColorR1C3C3 = 'style="';

    if (content.btnbgColorR1C3C3) {
        model.btnComponentColorR1C3C3 += 'background-color: ' + content.btnbgColorR1C3C3.value + '; ';
    }
    
    if (content.btntextColorR1C3C3) {
        model.btnComponentColorR1C3C3 += 'color: ' + content.btntextColorR1C3C3.value + '; ';
    }

    if (content.btnBorderColorR1C3C3) {
        model.btnComponentColorR1C3C3 += 'border-color: ' + content.btnBorderColorR1C3C3.value + '; ';
    }
    model.btnComponentColorR1C3C3 += '"';

     /* Col 3 parallax text Alignment  */
     if (content.textAlignmentR1C3C3 === 'left') {
        model.textAlignmentR1C3C3 = 'text-start';
    } else if (content.textAlignmentR1C3C3 === 'right') {
        model.textAlignmentR1C3C3 = 'text-end';
    } else if (content.textAlignmentR1C3C3 === 'center') {
        model.textAlignmentR1C3C3 = 'text-center';
    }

    
    /* End Column 3 */

    /* Column 1 */
    model.ParallaxScrTextSection = content.ParallaxScrTextSection ? content.ParallaxScrTextSection : '';
    model. ParallaxScrHdSectionR1C1 = content.ParallaxScrHdSectionR1C1 ? content.ParallaxScrHdSectionR1C1 : null;
    model.ParallaxScrbtn = content.ParallaxScrbtn? content.ParallaxScrbtn : null;
    model.ParallaxScrimg= content.ParallaxScrimg ? content.ParallaxScrimg.file.url : null;
    model.TextSectionPaddingR1C1 = content.TextSectionPaddingR1C1? content.TextSectionPaddingR1C1 : '';

    /* parallax text Alignment  */
    if (content.textAlignment === 'left') {
        model.textAlignment = 'text-start';
    } else if (content.textAlignment === 'right') {
        model.textAlignment = 'text-end';
    } else if (content.textAlignment === 'center') {
        model.textAlignment = 'text-center';
    }

    if (content.tileLink) {
        model.tileLink = content.tileLink;
    } else {
        model.tileLink = 'javascript:void(0)';
    }

    model.tileNewtab = content.tileNewtab;
    model.buttontext = content.buttontext;

    
    /* parallax Button  Color  */

    model.btnComponentColor = 'style="';

    if (content.btnbgColor) {
        model.btnComponentColor += 'background-color: ' + content.btnbgColor.value + '; ';
    }
    
    if (content.btntextColor) {
        model.btnComponentColor += 'color: ' + content.btntextColor.value + '; ';
    }

    if (content.btnBorderColor) {
        model.btnComponentColor += 'border-color: ' + content.btnBorderColor.value + '; ';
    }
    model.btnComponentColor += '"';

    /* parallax Section Text Color  */
    model.textContentColor = 'style="';
    
    if (content.textColor) {
        model.textContentColor += 'color: ' + content.textColor.value + '; ';
    }

    model.textContentColor += '"';

    /* End Column 1 */
/* Column 2  */
model.ParallaxScrTextSectionR1C2 = content.ParallaxScrTextSectionR1C2 ? content.ParallaxScrTextSectionR1C2 : '';
model. ParallaxScrHdSectionR1C2 = content.ParallaxScrHdSectionR1C2 ? content.ParallaxScrHdSectionR1C2 : null;
model.ParallaxScrbtnR1C2 = content.ParallaxScrbtnR1C2? content.ParallaxScrbtnR1C2 : null;
model.TextSectionPaddingR1C2 = content.TextSectionPaddingR1C2 ? content.TextSectionPaddingR1C2 : '';

if (content.tileLinkR1C2) {
    model.tileLinkR1C2 = content.tileLinkR1C2;
} else {
    model.tileLinkR1C2 = 'javascript:void(0)';
}

model.tileNewtabR1C2 = content.tileNewtabR1C2;




/* parallax text Alignment  */
if (content.textAlignmentR1C2  === 'left') {
    model.textAlignmentR1C2  = 'text-start';
} else if (content.textAlignmentR1C2  === 'right') {
    model.textAlignmentR1C2  = 'text-end';
} else if (content.textAlignmentR1C2  === 'center') {
    model.textAlignmentR1C2  = 'text-center';
}

/* parallax Button  Color  */

model.bgComponentColorR1C2 = 'style="';

 if (content.btnbgColorR1C2) {
     model.bgComponentColorR1C2 += 'background-color: ' + content.btnbgColorR1C2.value + '; ';
}

 if (content.btntextColorR1C2) {
     model.bgComponentColorR1C2 += 'color: ' + content.btntextColorR1C2.value + '; ';
 }

if (content.btnBorderColorR1C2) {
     model.bgComponentColorR1C2 += 'border-color: ' + content.btnBorderColorR1C2.value + '; ';
 }
 model.bgComponentColorR1C2 += '"';


 model.textContentColorR1C2 = 'style="';

if (content.textColorR1C2) {
    model.textContentColorR1C2 += 'color: ' + content.textColorR1C2.value + '; ';
}

model.textContentColorR1C2 += '"';




    /* End Column 2  */

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

    model.regions = PageRenderHelper.getRegionModelRegistry(component);

    return new Template('experience/components/pd_layouts/pdPlusParallaxScrollingR1C3').render(model).text;
};
