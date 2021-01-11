/// <reference types="types-for-adobe/photoshop/2015.5"/>

/**
 * Represent photoshop operation
 */
interface IOperation
{
    /**
     * Run operation and return resulting Document
     */
    run(): Document;

    /**
     * Run operation and close resulting Document
     */
    runAndClose(saveOptions: SaveOptions): void;

    /**
     * Get next operation
     */
    getNext(): IOperation;

    /**
     * Set next operation
     * @param next next operation
     */
    setNext(next: IOperation): IOperation;

    /**
     * Return operation's document
     */
    getDoc(): Document | undefined;

    /**
     * Set operation's document
     * @param doc operation's document
     */
    setDoc(doc: Document): void;

    /**
     * True if operation has next operation defined
     */
    hasNext(): boolean;
}