/**
 * Duplicate layer
 */
class CopyLayerOperation extends BaseOperation
{
    protected readonly sourceDoc: Document;
    protected readonly layerIdx: number;

    constructor(sourceDoc: Document, layerIdx: number)
    {
        super();
        this.sourceDoc = sourceDoc;
        this.layerIdx = layerIdx;
    }

    protected runHook(): void {
        AppUtil.setActiveDocument(this.sourceDoc, doc => doc.artLayers[this.layerIdx]
            .duplicate(this.doc!.artLayers[0], ElementPlacement.PLACEBEFORE));
    }
}