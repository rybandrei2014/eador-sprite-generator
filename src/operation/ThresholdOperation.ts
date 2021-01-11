/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Apply threshold
 */
class ThresholdOperation extends BaseOperation
{
    protected readonly threshold: number;

    constructor(threshold: number)
    {
        super();
        this.threshold = threshold;
    }

    protected runHook(): void
    {
        var desc584 = ActionUtil.createActionDesc();

        var idThrs = ActionUtil.c2t("Thrs");
        var idLvl = ActionUtil.c2t("Lvl ");

        desc584.putInteger(idLvl, this.threshold);

        app.executeAction(idThrs, desc584, DialogModes.NO);
    }
}