/// <reference path="BaseOperation.ts"/>

abstract class BaseInitOperation extends BaseOperation
{
    runHook()
    {}

    protected abstract initDoc() : Document;
}