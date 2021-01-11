/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseOperation.ts"/>
/// <reference path="../util/ActionUtil.ts"/>
/// <reference path="../model/FlipDir.ts"/>

/**
 * Represent flip operation in either axis
 */
class FlipOperation extends BaseOperation
{
    protected readonly flipDir : FlipDir;

    constructor(flipDir: FlipDir)
    {
        super();
        this.flipDir = flipDir;
    }

    protected runHook(): void
    {
        let desc = ActionUtil.createActionDesc();
        let ref = ActionUtil.createActionRef();

        let idFlip = ActionUtil.c2t("Flip");
        let idNull = ActionUtil.c2t("null");
        let idDcmn = ActionUtil.c2t("Dcmn");
        let idOrdn = ActionUtil.c2t("Ordn");
        let idFrst = ActionUtil.c2t("Frst");
        let idAxis = ActionUtil.c2t("Axis");
        let idOrnt = ActionUtil.c2t("Ornt");
        let idHrzn = ActionUtil.c2t(this.flipDir);

        ref.putEnumerated(idDcmn, idOrdn, idFrst);
        desc.putReference(idNull, ref);
        desc.putEnumerated(idAxis, idOrnt, idHrzn);

        app.executeAction(idFlip, desc, DialogModes.NO);
    }
}