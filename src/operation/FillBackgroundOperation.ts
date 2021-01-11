/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseColorOperation.ts"/>

/**
 * Fill background layer with color
 */
class FillBackgroundOperation extends BaseColorOperation
{
    runHook()
    {
        AppUtil.setActiveLayer(this.doc!, this.doc!.backgroundLayer, _ => {
            app.backgroundColor.rgb.hexValue = ColorUtil.getColorHexValue(
                this.red, this.green, this.blue);
            
            app.activeDocument.selection.fill(app.backgroundColor,
                ColorBlendMode.NORMAL, this.opacity, false);
        });
    }
}