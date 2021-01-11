/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Represent perspective warp operation
 */
class PerspectiveWarpTransformOperation extends BaseOperation
{
    protected height: number;
    protected width: number;
    // Warp coefficients
    protected coef: number;
    protected heightCoef1: number;
    protected heightCoef2: number;
    protected heightCoef3: number;
    protected heightCoef4: number;
    protected heightCoef5: number;
    protected widthCoef1: number;
    protected widthCoef2: number;
    protected widthCoef3: number;
    protected widthCoef4: number;
    protected widthCoef5: number;

    constructor(height: number, width: number, coef: number, heightCoef1: number, heightCoef2: number, heightCoef3: number,
        heightCoef4: number, heightCoef5: number, widthCoef1: number, widthCoef2: number, widthCoef3: number,
        widthCoef4: number, widthCoef5: number)
    {
        super();
        this.height = height;
        this.width = width;
        this.coef = coef;
        this.heightCoef1 = heightCoef1;
        this.heightCoef2 = heightCoef2;
        this.heightCoef3 = heightCoef3;
        this.heightCoef4 = heightCoef4;
        this.heightCoef5 = heightCoef5;
        this.widthCoef1 = widthCoef1;
        this.widthCoef2 = widthCoef2;
        this.widthCoef3 = widthCoef3;
        this.widthCoef4 = widthCoef4;
        this.widthCoef5 = widthCoef5;
    }

    protected runHook(): void
    {
        var idperspectiveWarpTransform = ActionUtil.s2t("perspectiveWarpTransform");
        var desc1756 = ActionUtil.createActionDesc();
        var idnull = ActionUtil.c2t("null");
        var ref27 = ActionUtil.createActionRef();
        var idLyr = ActionUtil.c2t("Lyr ");
        var idOrdn = ActionUtil.c2t("Ordn");
        var idTrgt = ActionUtil.c2t("Trgt");
        ref27.putEnumerated(idLyr, idOrdn, idTrgt);
        desc1756.putReference(idnull, ref27);
        var idMd = ActionUtil.c2t("Md  ");
        var idperspectiveWarpMode = ActionUtil.s2t("perspectiveWarpMode");
        var idwarp = ActionUtil.s2t("warp");
        desc1756.putEnumerated(idMd, idperspectiveWarpMode, idwarp);
        var idreferenceRect = ActionUtil.s2t("referenceRect");
        var desc1757 = ActionUtil.createActionDesc();
        var idTop = ActionUtil.c2t("Top ");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1757.putUnitDouble(idTop, idPxl, 0);
        var idLeft = ActionUtil.c2t("Left");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1757.putUnitDouble(idLeft, idPxl, 0);
        var idBtom = ActionUtil.c2t("Btom");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1757.putUnitDouble(idBtom, idPxl, this.height);
        var idRght = ActionUtil.c2t("Rght");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1757.putUnitDouble(idRght, idPxl, this.width);
        var idRctn = ActionUtil.c2t("Rctn");
        desc1756.putObject(idreferenceRect, idRctn, desc1757);
        var idvertices = ActionUtil.s2t("vertices");
        var list45 = new ActionList();
        var desc1758 = ActionUtil.createActionDesc();
        var idHrzn = ActionUtil.c2t("Hrzn");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1758.putUnitDouble(idHrzn, idPxl, 0);
        var idVrtc = ActionUtil.c2t("Vrtc");
        var idPxl = ActionUtil.c2t("#Pxl" );
        desc1758.putUnitDouble(idVrtc, idPxl, this.coef);
        var idPnt = ActionUtil.c2t("Pnt ");
        list45.putObject(idPnt, desc1758);
        var desc1759 = ActionUtil.createActionDesc();
        var idHrzn = ActionUtil.c2t("Hrzn");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1759.putUnitDouble(idHrzn, idPxl, this.width * this.widthCoef1);
        var idVrtc = ActionUtil.c2t("Vrtc");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1759.putUnitDouble(idVrtc, idPxl, this.coef);
        var idPnt = ActionUtil.c2t("Pnt ");
        list45.putObject(idPnt, desc1759);
        var desc1760 = ActionUtil.createActionDesc();
        var idHrzn = ActionUtil.c2t("Hrzn");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1760.putUnitDouble(idHrzn, idPxl, this.width * this.widthCoef1);
        var idVrtc = ActionUtil.c2t("Vrtc");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1760.putUnitDouble(idVrtc, idPxl, this.height * this.heightCoef1);
        var idPnt = ActionUtil.c2t("Pnt ");
        list45.putObject(idPnt, desc1760);
        var desc1761 = ActionUtil.createActionDesc();
        var idHrzn = ActionUtil.c2t("Hrzn");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1761.putUnitDouble(idHrzn, idPxl, 0);
        var idVrtc = ActionUtil.c2t("Vrtc");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1761.putUnitDouble(idVrtc, idPxl, this.height * this.heightCoef1);
        var idPnt = ActionUtil.c2t("Pnt ");
        list45.putObject(idPnt, desc1761);
        desc1756.putList(idvertices, list45);
        var idwarpedVertices = ActionUtil.s2t("warpedVertices");
        var list46 = new ActionList();
        var desc1762 = ActionUtil.createActionDesc();
        var idHrzn = ActionUtil.c2t("Hrzn");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1762.putUnitDouble(idHrzn, idPxl, this.width * this.widthCoef2);
        var idVrtc = ActionUtil.c2t("Vrtc");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1762.putUnitDouble(idVrtc, idPxl, this.height * this.heightCoef2);
        var idPnt = ActionUtil.c2t("Pnt ");
        list46.putObject(idPnt, desc1762);
        var desc1763 = ActionUtil.createActionDesc();
        var idHrzn = ActionUtil.c2t("Hrzn");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1763.putUnitDouble(idHrzn, idPxl, this.width * this.widthCoef3);
        var idVrtc = ActionUtil.c2t("Vrtc");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1763.putUnitDouble(idVrtc, idPxl, this.height * this.heightCoef3);
        var idPnt = ActionUtil.c2t("Pnt ");
        list46.putObject(idPnt, desc1763);
        var desc1764 = ActionUtil.createActionDesc();
        var idHrzn = ActionUtil.c2t("Hrzn");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1764.putUnitDouble(idHrzn, idPxl, this.width * this.widthCoef4);
        var idVrtc = ActionUtil.c2t("Vrtc");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1764.putUnitDouble(idVrtc, idPxl, this.height * this.heightCoef4);
        var idPnt = ActionUtil.c2t("Pnt ");
        list46.putObject(idPnt, desc1764);
        var desc1765 = ActionUtil.createActionDesc();
        var idHrzn = ActionUtil.c2t("Hrzn");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1765.putUnitDouble(idHrzn, idPxl, this.width * this.widthCoef5);
        var idVrtc = ActionUtil.c2t("Vrtc");
        var idPxl = ActionUtil.c2t("#Pxl");
        desc1765.putUnitDouble(idVrtc, idPxl, this.height * this.heightCoef5);
        var idPnt = ActionUtil.c2t("Pnt ");
        list46.putObject(idPnt, desc1765);
        desc1756.putList(idwarpedVertices, list46);
        var idquads = ActionUtil.s2t("quads");
        var list47 = new ActionList();
        var desc1766 = ActionUtil.createActionDesc();
        var idindices = ActionUtil.s2t("indices");
        var list48 = new ActionList();
        list48.putInteger(0);
        list48.putInteger(1);
        list48.putInteger(2);
        list48.putInteger(3);
        desc1766.putList(idindices, list48);
        var idperspectiveWarpQuad = ActionUtil.s2t("perspectiveWarpQuad");
        list47.putObject(idperspectiveWarpQuad, desc1766);
        desc1756.putList(idquads, list47);
        app.executeAction(idperspectiveWarpTransform, desc1756, DialogModes.NO);
    }
}