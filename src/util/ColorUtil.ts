/// <reference types="types-for-adobe/photoshop/2015.5"/>

abstract class ColorUtil
{
    /**
     * Return string with hex color value
     * @param red 
     * @param green 
     * @param blue 
     */
    public static getColorHexValue(red: number, green: number, blue: number) : string
    {
        var color = new SolidColor();
        color.rgb.red = red;
        color.rgb.green = green;
        color.rgb.blue = blue;
        return color.rgb.hexValue;
    }

    /**
     * Threshold value of color channel to values in range [0 .. 255]
     * @param value value of color chanel
     */
    public static thresholdColorValue(value: number) : number
    {
        if (value > 255)
            return 255;
        else if (value < 0)
            return 0;
        else
            return value;
    }

    /**
     * Threshold opacity value to values in range [0 .. 100]
     * @param value opacity value
     */
    public static thresholdOpacityValue(value: number) : number
    {
        if (value > 100)
            return 100;
        else if (value < 0)
            return 0;
        else
            return value;
    }
}