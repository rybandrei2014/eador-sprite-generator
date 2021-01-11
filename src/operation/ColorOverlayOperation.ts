/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../common/BaseColorOperation.ts"/>
/// <reference path="../util/ColorUtil.ts"/>
/// <reference path="../util/ActionUtil.ts"/>

/**
 * Overlay active layer with color
 */
class ColorOverlayOperation extends BaseColorOperation
{
    protected runHook(): void
    {
        var idsetd = ActionUtil.c2t( "setd" );
        var desc84 = ActionUtil.createActionDesc();
        var idnull = ActionUtil.c2t( "null" );
        var ref16 = ActionUtil.createActionRef();
        var idPrpr = ActionUtil.c2t( "Prpr" );
        var idLefx = ActionUtil.c2t( "Lefx" );
        ref16.putProperty( idPrpr, idLefx );
        var idLyr = ActionUtil.c2t( "Lyr " );
        var idOrdn = ActionUtil.c2t( "Ordn" );
        var idTrgt = ActionUtil.c2t( "Trgt" );
        ref16.putEnumerated( idLyr, idOrdn, idTrgt );
        desc84.putReference( idnull, ref16 );
        var idT = ActionUtil.c2t( "T   " );
        var desc85 = ActionUtil.createActionDesc();
        var idScl = ActionUtil.c2t( "Scl " );
        var idPrc = ActionUtil.c2t( "#Prc" );
        desc85.putUnitDouble( idScl, idPrc, 100.000000 );
        var idSoFi = ActionUtil.c2t( "SoFi" );
        var desc86 = ActionUtil.createActionDesc();
        var idenab = ActionUtil.c2t( "enab" );
        desc86.putBoolean( idenab, true );
        var idpresent = ActionUtil.s2t( "present" );
        desc86.putBoolean( idpresent, true );
        var idshowInDialog = ActionUtil.s2t( "showInDialog" );
        desc86.putBoolean( idshowInDialog, true );
        var idMd = ActionUtil.c2t( "Md  " );
        var idBlnM = ActionUtil.c2t( "BlnM" );
        var idNrml = ActionUtil.c2t( "Nrml" );
        desc86.putEnumerated( idMd, idBlnM, idNrml );
        var idClr = ActionUtil.c2t( "Clr " );
        var desc87 = ActionUtil.createActionDesc();
        var idRd = ActionUtil.c2t( "Rd  " );
        desc87.putDouble( idRd, this.red );
        var idGrn = ActionUtil.c2t( "Grn " );
        desc87.putDouble( idGrn, this.green );
        var idBl = ActionUtil.c2t( "Bl  " );
        desc87.putDouble( idBl, this.blue );
        var idRGBC = ActionUtil.c2t( "RGBC" );
        desc86.putObject( idClr, idRGBC, desc87 );
        var idOpct = ActionUtil.c2t( "Opct" );
        var idPrc = ActionUtil.c2t( "#Prc" );
        desc86.putUnitDouble( idOpct, idPrc, this.opacity );
        var idSoFi = ActionUtil.c2t( "SoFi" );
        desc85.putObject( idSoFi, idSoFi, desc86 );
        var idLefx = ActionUtil.c2t( "Lefx" );
        desc84.putObject( idT, idLefx, desc85 );
        app.executeAction( idsetd, desc84, DialogModes.NO );
    }
}