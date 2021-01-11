/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="util/AppUtil.ts"/>
/// <reference path="model/ResampleType.ts"/>
/// <reference path="operation/OperationBuilder.ts"/>
/// <reference path="operation/NewFromOperation.ts"/>
/// <reference path="operation/FillBackgroundOperation.ts"/>
/// <reference path="operation/CopyLayerOperation.ts"/>
/// <reference path="operation/RemoveTransparentOperation.ts"/>
/// <reference path="operation/SaveBmpOperation.ts"/>
/// <reference path="operation/LoadOperation.ts"/>
/// <reference path="operation/TranslateLayerOperation.ts"/>
/// <reference path="operation/PerspectiveWarpTransformOperation.ts"/>
/// <reference path="operation/CustomOperation.ts"/>
/// <reference path="operation/FlipOperation.ts"/>
/// <reference path="operation/ResizeOperation.ts"/>
/// <reference path="operation/ColorOverlayOperation.ts"/>
/// <reference path="operation/SelectAllOperation.ts"/>
/// <reference path="operation/ActivateMaskOperation.ts"/>
/// <reference path="operation/ThresholdOperation.ts"/>
/// <reference path="operation/ClearMaskOperation.ts"/>
/// <reference path="operation/InverseSelectionOperation.ts"/>
/// <reference path="operation/DeleteOperation.ts"/>
/// <reference path="operation/DefringeOperation.ts"/>
/// <reference path="operation/StrokeOperation.ts"/>
/// <reference path="operation/DeselectOperation.ts"/>
/// <reference path="model/StrokeDir.ts"/>
/// <reference path="Env.ts" />

const MAIN_FOLDER_URL = Env.MAIN_FOLDER_URL;
const PICTS_TEMPLATE_URL = Env.PICTS_TEMPLATE_URL;
const ICON_TEMPLATE_URL = Env.ICON_TEMPLATE_URL;
const ITEM_TEMPLATE_URL = Env.ITEM_TEMPLATE_URL;
const UNITS_FOLDER_URL = Env.UNITS_FOLDER_URL;
const UNIT_SHADOW_FOLDER_URL = Env.UNIT_SHADOW_FOLDER_URL;
const UNIT_SHADOWF_FOLDER_URL = Env.UNIT_SHADOWF_FOLDER_URL;
const UNIT_ICONS_FOLDER_URL = Env.UNIT_ICONS_FOLDER_URL;
const UNIT_PICTS_FOLDER_URL = Env.UNIT_PICTS_FOLDER_URL;
const ITEMS_FOLDER_URL = Env.ITEMS_FOLDER_URL;
const OUT_HEIGHT = parseInt(Env.OUT_HEIGHT);
const THRESHOLD_VALUE = parseInt(Env.THRESHOLD_VALUE);
const DEFRINGE_VALUE = parseInt(Env.DEFRINGE_VALUE);

// load templates
const pictsTemplate = new LoadOperation(PICTS_TEMPLATE_URL).run();
const iconTemplate = new LoadOperation(ICON_TEMPLATE_URL).run();
const itemTemplate = new LoadOperation(ITEM_TEMPLATE_URL).run();

const mainFolder = Folder(MAIN_FOLDER_URL);

// extract unit psd files from MAIN_FOLDER
const files = mainFolder.getFiles(function(f : File | Folder) { return f instanceof File; });

files.forEach(function (file : File | Folder) {
    const fileUrl = file.fsName;

    // extract height of resulting image from psd file's name
    const [fileName, heightStr] = file.name.split('_');

    const height = heightStr
        ? parseInt(heightStr)
        : OUT_HEIGHT;
    
    // load unit psd to process, remove transparent border pixels
    const fileDoc = OperationBuilder.create(new LoadOperation(fileUrl))
        .next(new SelectAllOperation())
        .next(new ActivateMaskOperation())
        .next(new ThresholdOperation(THRESHOLD_VALUE))
        .next(new ClearMaskOperation())
        .next(new InverseSelectionOperation())
        .next(new DeleteOperation())
        .next(new DeselectOperation())
        .next(new DefringeOperation(DEFRINGE_VALUE))
        .run();

    // 1. units.dat related processing
    OperationBuilder.create(new NewFromOperation(fileDoc))
        .next(new FillBackgroundOperation(255, 0, 255))
        .next(new CopyLayerOperation(fileDoc, 0))
        .next(new RemoveTransparentOperation(0))
        .next(new ResizeOperation(ResampleType.PreserveDetails2, height))
        .next(new SaveBmpOperation(UNITS_FOLDER_URL, fileName))
        .runAndClose();

    // 2. unit_shadow.dat related processing
    OperationBuilder.create(new NewFromOperation(fileDoc))
        .next(new FillBackgroundOperation(255, 0, 255))
        .next(new CopyLayerOperation(fileDoc, 0))
        .next(new ResizeOperation(ResampleType.PreserveDetails2, height))
        .next(new CustomOperation(o => AppUtil.setActiveFirstLayer(o.getDoc()!)))
        .next(new ColorOverlayOperation(0, 0, 0, 100))
        .next(new PerspectiveWarpTransformOperation(fileDoc.height as number, fileDoc.width as number,
            -0.320665, 0.997625, 0.789605, 0.786326, 0.997625, 0.995465, 1.00755, 0.588373, 0.977016,
            0.986964, 0.037736))
        .next(new SaveBmpOperation(UNIT_SHADOW_FOLDER_URL, fileName))
        .runAndClose();


    // 3. unit_shadowf.dat related processing
    OperationBuilder.create(new NewFromOperation(fileDoc))
        .next(new FillBackgroundOperation(255, 0, 255))
        .next(new CopyLayerOperation(fileDoc, 0))
        .next(new ResizeOperation(ResampleType.PreserveDetails2, height))
        .next(new CustomOperation(o => AppUtil.setActiveFirstLayer(o.getDoc()!)))
        .next(new ColorOverlayOperation(0, 0, 0, 100))
        .next(new FlipOperation(FlipDir.Horizontal))
        .next(new PerspectiveWarpTransformOperation(fileDoc.height as number, fileDoc.width as number,
            -0.320755, 0.99525, 0.7845, 0.783866, 0.99525, 0.99525, 0.996226, 0.527866, 0.929385,
            0.996226, -0.003774))
        .next(new SaveBmpOperation(UNIT_SHADOWF_FOLDER_URL, fileName))
        .runAndClose();

    // 4. unit_icons.dat related processing 64x80
    OperationBuilder.create(new NewFromOperation(iconTemplate))
        .next(new CopyLayerOperation(iconTemplate, 0))
        .next(new CopyLayerOperation(fileDoc, 0))
        .next(new ResizeOperation(ResampleType.PreserveDetails2, height))
        .next(new TranslateLayerOperation(0, 0, .03))
        .next(new SaveBmpOperation(UNIT_ICONS_FOLDER_URL, fileName))
        .runAndClose();


    // 5. unit_picts.dat related processing 52x52
    OperationBuilder.create(new NewFromOperation(pictsTemplate))
        .next(new CopyLayerOperation(pictsTemplate, 0))
        .next(new CopyLayerOperation(fileDoc, 0))
        .next(new ResizeOperation(ResampleType.PreserveDetails2, height))
        .next(new TranslateLayerOperation(0, -.05, -.06))
        .next(new SaveBmpOperation(UNIT_PICTS_FOLDER_URL, fileName))
        .runAndClose();

    // 6. items.dat related processing 52x52
    OperationBuilder.create(new NewFromOperation(itemTemplate))
        .next(new CopyLayerOperation(itemTemplate, 0))
        .next(new CopyLayerOperation(fileDoc, 0))
        .next(new ResizeOperation(ResampleType.PreserveDetails2, height))
        .next(new TranslateLayerOperation(0, -.05, -.06))
        .next(new SaveBmpOperation(ITEMS_FOLDER_URL, fileName))
        .runAndClose();
    
    fileDoc.close(SaveOptions.DONOTSAVECHANGES);
});

pictsTemplate.close();
itemTemplate.close();
iconTemplate.close();