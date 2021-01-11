/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Clear selection operation
 */
class DeselectOperation extends BaseOperation
{
    protected runHook(): void
    {
        var desc51 = ActionUtil.createActionDesc();
        var ref4 = ActionUtil.createActionRef();

        var idsetd = ActionUtil.c2t("setd");
        var idnull = ActionUtil.c2t("null");
        var idChnl = ActionUtil.c2t("Chnl");
        var idfsel = ActionUtil.c2t("fsel");
        var idT = ActionUtil.c2t("T   ");
        var idOrdn = ActionUtil.c2t("Ordn");
        var idNone = ActionUtil.c2t("None");

        ref4.putProperty(idChnl, idfsel);
        desc51.putReference(idnull, ref4);
        desc51.putEnumerated(idT, idOrdn, idNone);
        app.executeAction(idsetd, desc51, DialogModes.NO);
    }
}