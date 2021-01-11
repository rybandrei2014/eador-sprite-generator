/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Represent defringe operation
 */
class DefringeOperation extends BaseOperation
{
    protected readonly amount: number;

    constructor(amount: number)
    {
        super();
        this.amount = amount;
    }

    protected runHook(): void
    {
        var desc28 = ActionUtil.createActionDesc();

        var idDfrg = ActionUtil.c2t("Dfrg");
        var idWdth = ActionUtil.c2t("Wdth");
        var idPxl = ActionUtil.c2t("#Pxl");

        desc28.putUnitDouble(idWdth, idPxl, this.amount);
        app.executeAction(idDfrg, desc28, DialogModes.NO);
    }
}