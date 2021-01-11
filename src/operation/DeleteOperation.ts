/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Represent delete operation
 */
class DeleteOperation extends BaseOperation
{
    protected runHook(): void
    {
        var idDlt = ActionUtil.c2t("Dlt ");
        app.executeAction(idDlt, undefined, DialogModes.NO);
    }
}