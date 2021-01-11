/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../common/IOperation.ts"/>

/**
 * Operation with custom body
 */
class CustomOperation extends BaseOperation
{
    protected readonly func: (o: IOperation) => void;

    constructor(func: (o: IOperation) => void)
    {
        super();
        this.func = func;
    }

    runHook(): void
    {
        this.func(this);
    }
}