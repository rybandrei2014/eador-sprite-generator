/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="../util/AppUtil.ts"/>
/// <reference path="../common/BaseOperation.ts"/>

/**
 * Save Document as BMP
 */
class SaveBmpOperation extends BaseOperation
{
    protected readonly basePath: string;
    protected readonly fileName: string;
    protected readonly depth: BMPDepthType;

    constructor(basePath: string, fileName: string, depth: BMPDepthType = BMPDepthType.TWENTYFOUR)
    {
        super();
        this.fileName = AppUtil.fileNameWithoutExt(fileName);
        this.basePath = basePath;
        this.depth = depth;
    }

    protected runHook(): void {
        var saveOptions = new BMPSaveOptions();
        saveOptions.depth = this.depth;
        this.doc!.saveAs(new File(`${this.basePath}\\${this.fileName}.bmp`),
            saveOptions, true);
    }
}