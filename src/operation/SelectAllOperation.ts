/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Select all on a layer
 */
class SelectAllOperation extends BaseOperation
{
    protected runHook(): void
    {
        var desc579 = ActionUtil.createActionDesc();
        var ref130 = ActionUtil.createActionRef();
        var ref131 = ActionUtil.createActionRef();

        var idsetd = ActionUtil.c2t("setd");
        var idnull = ActionUtil.c2t("null");
        var idChnl = ActionUtil.c2t("Chnl");
        var idfsel = ActionUtil.c2t("fsel");
        var idT = ActionUtil.c2t("T   ");
        var idChnl = ActionUtil.c2t("Chnl");
        var idChnl = ActionUtil.c2t("Chnl");
        var idTrsp = ActionUtil.c2t("Trsp");

        ref130.putProperty(idChnl, idfsel);
        desc579.putReference(idnull, ref130);
        ref131.putEnumerated(idChnl, idChnl, idTrsp);
        desc579.putReference(idT, ref131);

        app.executeAction(idsetd, desc579, DialogModes.NO);
    }
}