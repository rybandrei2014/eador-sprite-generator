/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Activate mask
 */
class ActivateMaskOperation extends BaseOperation
{
    protected runHook(): void
    {
        var desc580 = ActionUtil.createActionDesc();
        var ref132 = ActionUtil.createActionRef();

        var idsetd = ActionUtil.c2t("setd");
        var idnull = ActionUtil.c2t("null");
        var idPrpr = ActionUtil.c2t("Prpr");
        var idQucM = ActionUtil.c2t("QucM");
        var idDcmn = ActionUtil.c2t("Dcmn");
        var idOrdn = ActionUtil.c2t("Ordn");
        var idTrgt = ActionUtil.c2t("Trgt");

        ref132.putProperty(idPrpr, idQucM);
        ref132.putEnumerated(idDcmn, idOrdn, idTrgt);
        desc580.putReference(idnull, ref132);
        
        app.executeAction(idsetd, desc580, DialogModes.NO);
    }
}