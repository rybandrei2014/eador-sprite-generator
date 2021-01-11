/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseInitOperation.ts"/>

/**
 * Load document from filePath
 */
class LoadOperation extends BaseInitOperation
{
    protected readonly filePath: string;

    constructor(filePath: string)
    {
        super();
        this.filePath = filePath;
        this.doc = this.initDoc();
    }

    protected initDoc()
    {
        app.load(new File(this.filePath));
        return app.activeDocument;
    }
}