/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseColorOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>
/// <reference path="../model/StrokeDir.ts"/>

/**
 * Apply stroke
 */
class StrokeOperation extends BaseColorOperation
{
    protected readonly strokePxls: number;
    protected readonly strokeDir: StrokeDir;

    constructor(red: number, green: number, blue: number, strokePxls: number, strokeDir: StrokeDir, opacity: number = 100)
    {
        super(red, green, blue, opacity);
        this.strokePxls = strokePxls;
        this.strokeDir = strokeDir;
    }

    protected runHook(): void
    {
        var desc34 = ActionUtil.createActionDesc();
        var ref7 = ActionUtil.createActionRef();
        var desc35 = ActionUtil.createActionDesc();
        var desc36 = ActionUtil.createActionDesc();
        var desc37 = ActionUtil.createActionDesc();

        var idsetd = ActionUtil.c2t("setd");
        var idnull = ActionUtil.c2t("null");
        var idPrpr = ActionUtil.c2t("Prpr");
        var idLefx = ActionUtil.c2t("Lefx");
        var idLyr = ActionUtil.c2t("Lyr ");
        var idOrdn = ActionUtil.c2t("Ordn");
        var idTrgt = ActionUtil.c2t("Trgt");
        var idT = ActionUtil.c2t("T   ");
        var idScl = ActionUtil.c2t("Scl ");
        var idPrc = ActionUtil.c2t("#Prc");
        var idFrFX = ActionUtil.c2t("FrFX");
        var idenab = ActionUtil.c2t("enab");
        var idpresent = ActionUtil.s2t("present");
        var idshowInDialog = ActionUtil.s2t("showInDialog");
        var idStyl = ActionUtil.c2t("Styl");
        var idFStl = ActionUtil.c2t("FStl");
        var idInsF = ActionUtil.c2t(this.strokeDir);
        var idPntT = ActionUtil.c2t("PntT");
        var idFrFl = ActionUtil.c2t("FrFl");
        var idSClr = ActionUtil.c2t("SClr");
        var idMd = ActionUtil.c2t("Md  ");
        var idBlnM = ActionUtil.c2t("BlnM");
        var idNrml = ActionUtil.c2t("Nrml");
        var idOpct = ActionUtil.c2t("Opct");
        var idPrc = ActionUtil.c2t("#Prc");
        var idSz = ActionUtil.c2t("Sz  ");
        var idPxl = ActionUtil.c2t("#Pxl");
        var idClr = ActionUtil.c2t("Clr ");
        var idRd = ActionUtil.c2t("Rd  ");
        var idGrn = ActionUtil.c2t("Grn ");
        var idBl = ActionUtil.c2t("Bl  ");
        var idRGBC = ActionUtil.c2t("RGBC");
        var idoverprint = ActionUtil.s2t("overprint");
        var idFrFX = ActionUtil.c2t("FrFX");
        var idLefx = ActionUtil.c2t("Lefx");

        ref7.putProperty(idPrpr, idLefx);
        ref7.putEnumerated(idLyr, idOrdn, idTrgt);
        desc34.putReference(idnull, ref7);
        desc35.putUnitDouble(idScl, idPrc, 100.000000);
        desc36.putBoolean(idenab, true);
        desc36.putBoolean(idpresent, true);
        desc36.putBoolean(idshowInDialog, true);
        desc36.putEnumerated(idStyl, idFStl, idInsF);
        desc36.putEnumerated(idPntT, idFrFl, idSClr);
        desc36.putEnumerated(idMd, idBlnM, idNrml);
        desc36.putUnitDouble(idOpct, idPrc, this.opacity);
        desc36.putUnitDouble(idSz, idPxl, this.strokePxls);
        desc37.putDouble(idRd, this.red);
        desc37.putDouble(idGrn, this.green);
        desc37.putDouble(idBl, this.blue);
        desc36.putObject(idClr, idRGBC, desc37);
        desc36.putBoolean(idoverprint, false);
        desc35.putObject(idFrFX, idFrFX, desc36);
        desc34.putObject(idT, idLefx, desc35);
        app.executeAction(idsetd, desc34, DialogModes.NO);
    }
}