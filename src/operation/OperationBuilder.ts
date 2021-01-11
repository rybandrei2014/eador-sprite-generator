/// <reference path="../common/IOperation.ts"/>
/// <reference path="../common/BaseInitOperation.ts"/>

/**
 * Builder to compose photoshop operations
 */
class OperationBuilder
{
    static create(operation: BaseInitOperation): OperationBuilder {
        return new OperationBuilder(operation);
    }

    protected initOperation: BaseInitOperation;

    protected operations?: [IOperation];

    private constructor(initOperation: BaseInitOperation)
    {
        this.initOperation = initOperation;
    }

    public next(operation: IOperation): OperationBuilder
    {
        if (this.operations)
        {
            this.operations?.push(operation);
        }
        else
        {
            this.operations = [operation];
        }

        return this;
    }

    public run() : Document
    {
        if (this.operations)
        {
            var nextOperation : IOperation = this.initOperation;
            
            this.operations?.forEach(operation =>
            {
                nextOperation.setNext(operation);

                nextOperation = operation;
            });
        }

        return this.initOperation.run();
    }

    public runAndClose(saveOptions: SaveOptions = SaveOptions.DONOTSAVECHANGES) : void
    {
        this.run().close(saveOptions);
    }
}