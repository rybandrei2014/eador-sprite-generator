/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="./IOperation.ts"/>

abstract class BaseOperation implements IOperation
{
    protected doc ?: Document;
    protected next ?: IOperation;

    public setNext(next: IOperation)
    {
        this.next = next;
        return this;
    }

    public getNext()
    {
        return this.next!;
    }

    public hasNext()
    {
        return this.next != null;
    }

    public run()
    {
        this.runHook();

        if (this.hasNext())
        {
            this.next!.setDoc(this.doc!);
            return this.next!.run();
        }
        
        return this.doc!;
    }

    public runAndClose(saveOptions: SaveOptions = SaveOptions.DONOTSAVECHANGES)
    {
        this.run().close(saveOptions);
    }

    public getDoc(): Document | undefined
    {
        return this.doc;
    }

    public setDoc(doc: Document)
    {
        this.doc = doc;
    }

    protected abstract runHook() : void;
}