/// <reference types="types-for-adobe/photoshop/2015.5"/>

abstract class ActionUtil
{
    /**
     * Call charIDToTypeID on app
     * @param c four character ID
     */
    public static c2t(c : string)
    {
        return app.charIDToTypeID(c);
    }

    /**
     * Call stringIDToTypeID on app
     * @param s photoshop string ID
     */
    public static s2t(s : string)
    {
        return app.stringIDToTypeID(s);
    }

    /**
     * Create instance of photoshop ActionDescriptor
     */
    public static createActionDesc() : ActionDescriptor
    {
        return new ActionDescriptor();
    }

    /**
     * Create instance of photoshop ActionReference
     */
    public static createActionRef() : ActionReference
    {
        return new ActionReference();
    }
}