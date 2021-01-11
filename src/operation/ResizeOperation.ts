/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Represent resize operation
 */
class ResizeOperation extends BaseOperation
{
    protected readonly heightPxls?: number;
    protected readonly widthPxls?: number;
    protected readonly scaleStyles: boolean;
    protected readonly resampleType: ResampleType;
    protected readonly noiseReduction: number;

    constructor(resampleType: ResampleType, heightPxls: number | undefined = undefined, widthPxls: number | undefined = undefined, scaleStyles = true, noiseReduction = 0)
    {
        super();
        this.heightPxls = heightPxls;
        this.widthPxls = widthPxls;
        this.scaleStyles = scaleStyles;
        this.resampleType = resampleType;
        this.noiseReduction = noiseReduction;
    }

    protected runHook(): void
    {
        let desc = ActionUtil.createActionDesc();
        let idImgS = ActionUtil.c2t("ImgS");
        let idPxl = ActionUtil.c2t("#Pxl");
        let idScaleStyles = ActionUtil.s2t("scaleStyles");
        let idCnsP = ActionUtil.c2t("CnsP");
        let idIntr = ActionUtil.c2t("Intr");
        let idIntp = ActionUtil.c2t("Intp");
        let idResample = ActionUtil.s2t(this.resampleType);
        let idNose = ActionUtil.c2t("Nose");

        if (this.heightPxls)
        {
            let idHght = ActionUtil.c2t("Hght");
            desc.putUnitDouble(idHght, idPxl, this.heightPxls);
        }

        if (this.widthPxls)
        {
            let idWdth = ActionUtil.c2t("Wdth");
            desc.putUnitDouble(idWdth, idPxl, this.widthPxls);
        }

        desc.putBoolean(idScaleStyles, this.scaleStyles);
        desc.putBoolean(idCnsP, true);
        desc.putEnumerated(idIntr, idIntp, idResample);
        desc.putInteger(idNose, this.noiseReduction);

        app.executeAction(idImgS, desc, DialogModes.NO);
    }
}