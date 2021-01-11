/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../util/AppUtil.ts"/>

/**
 * Apply translate operation
 */
class TranslateLayerOperation extends BaseOperation
{
    protected readonly layerIdx: number;
    protected readonly xRatio: number;
    protected readonly yRatio: number;

    constructor(layerIdx: number, xRatio: number, yRatio: number)
    {
        super();
        this.layerIdx = layerIdx;
        this.xRatio = xRatio;
        this.yRatio = yRatio;
    }

    protected runHook(): void
    {
        AppUtil.setActiveDocument(this.doc!, doc => {
            const layer = doc.artLayers[this.layerIdx];

            const x1 = layer.bounds[0] as number;
            const x2 = layer.bounds[2] as number;
            const y1 = layer.bounds[1] as number;
            const y2 = layer.bounds[3] as number;

            const height = x2 - x1;

            const width = y2 - y1;

            layer.translate(width * this.xRatio, height * this.yRatio);
        });
    }
}