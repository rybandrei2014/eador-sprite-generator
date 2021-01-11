/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>

/**
 * Duplicate layer xtimes and after that merge all layers resulting in layer without transparent pixels
 */
class RemoveTransparentOperation extends BaseOperation
{
    protected readonly layerIdx: number;
    protected readonly iter: number;

    constructor(layerIdx: number, iter: number = 8)
    {
        super();
        this.layerIdx = layerIdx;
        this.iter = iter;
    }

    protected runHook()
    {
        AppUtil.setActiveDocument(this.doc!, doc => {
            const bgLayer = doc.backgroundLayer;
            bgLayer.visible = false;

            var layerToCopy = doc.artLayers[this.layerIdx];
            for (var i=0; i < this.iter; i++)
            {
                layerToCopy.duplicate(layerToCopy, ElementPlacement.PLACEAFTER);
                layerToCopy.merge();
                layerToCopy = doc.artLayers[this.layerIdx];
            }

            bgLayer.visible = true;
        });
    }
}