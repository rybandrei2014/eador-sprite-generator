/// <reference types="types-for-adobe/photoshop/2015.5"/>

class AppUtil
{
    /**
     * Return file name without extension
     * @param fileName name of the file
     */
    public static fileNameWithoutExt(fileName: string): string
    {
        const separatorIdx = fileName.lastIndexOf('.');
        
        return separatorIdx !== -1
            ? fileName.substr(0, separatorIdx)
            : fileName;
    }

    /**
     * Set new active layer
     * @param doc Document to set active layer on
     * @param layer Layer to set as active
     * @param action action to call on layer set as active
     */
    public static setActiveLayer(doc: Document, layer: Layer, action: (layer: Layer) => void = () => {}): void
    {
        app.activeDocument = doc;
        app.activeDocument.activeLayer = layer;

        action(layer);
    }

    /**
     * Set new active document
     * @param doc Document to set active
     * @param action action to call on document set as active
     */
    public static setActiveDocument(doc: Document, action: (doc: Document) => void = () => {}): void
    {
        app.activeDocument = doc;

        action(doc);
    }

    /**
     * Set document's first layer as active one
     * @param doc Document
     */
    public static setActiveFirstLayer(doc: Document) : void
    {
        this.setActiveLayer(doc, doc.artLayers[0]);
    }
}