/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Represent inverse selection operation
 */
class InverseSelectionOperation extends BaseOperation
{
    protected runHook(): void
    {
        var idInvs = ActionUtil.c2t("Invs");
        app.executeAction(idInvs, undefined, DialogModes.NO);
    }
}