/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseInitOperation.ts"/>

/**
 * Create new empty document with name and dimensions from input document
 */
class NewFromOperation extends BaseInitOperation
{
    protected readonly baseDoc : Document;
    protected readonly fileName : string;

    constructor(baseDoc : Document, fileName: string = baseDoc.name)
    {
        super();
        this.baseDoc = baseDoc;
        this.fileName = fileName;
        this.doc = this.initDoc();
    }

    protected initDoc()
    {
        return app.documents.add(this.baseDoc.width, this.baseDoc.height,
            this.baseDoc.resolution, this.fileName);
    }
}