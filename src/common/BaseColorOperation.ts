/// <reference types="types-for-adobe/photoshop/2015.5"/>
/// <reference path="BaseOperation.ts"/>

abstract class BaseColorOperation extends BaseOperation
{
    protected red: number;
    protected green: number;
    protected blue: number;
    protected opacity: number;

    constructor(red: number, green: number, blue: number, opacity: number = 100)
    {
        super();
        this.red = ColorUtil.thresholdColorValue(red);
        this.green = ColorUtil.thresholdColorValue(green);
        this.blue = ColorUtil.thresholdColorValue(blue);
        this.opacity = ColorUtil.thresholdOpacityValue(opacity);
    }
}