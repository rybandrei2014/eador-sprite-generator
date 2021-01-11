/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Clear mask
 */
class ClearMaskOperation extends BaseOperation
{
    protected runHook(): void
    {
        var desc585 = ActionUtil.createActionDesc();
        var ref133 = ActionUtil.createActionRef();

        var idCler = ActionUtil.c2t("Cler");
        var idnull = ActionUtil.c2t("null");
        var idPrpr = ActionUtil.c2t("Prpr");
        var idQucM = ActionUtil.c2t("QucM");
        var idDcmn = ActionUtil.c2t("Dcmn");
        var idOrdn = ActionUtil.c2t("Ordn");
        var idTrgt = ActionUtil.c2t("Trgt");

        ref133.putProperty(idPrpr, idQucM);
        ref133.putEnumerated(idDcmn, idOrdn, idTrgt);
        desc585.putReference(idnull, ref133);

        app.executeAction(idCler, desc585, DialogModes.NO);
    }
}