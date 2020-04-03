/*******************************************************************************
 *    
 *                           FRAMEWORK Lixbox
 *                          ==================
 *      
 *   Copyrigth - LIXTEC - Tous droits reserves.
 *   
 *   Le contenu de ce fichier est la propriete de la societe Lixtec.
 *   
 *   Toute utilisation de ce fichier et des informations, sous n'importe quelle
 *   forme necessite un accord ecrit explicite des auteurs
 *   
 *   @AUTHOR Ludovic TERRAL
 *
 ******************************************************************************/
package fr.lixbox.ui.faces.component.input;

import javax.faces.component.FacesComponent;
import javax.faces.component.html.HtmlCommandButton;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage du contenu d'un CommandButtonComponent
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "commandButton", namespace = "http://www.lixbox.fr/input")
public class CommandButtonComponent extends HtmlCommandButton implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        styleClass,
        icon,
        escape,
        bordered,
        rounded,
        confirmLabel,
        size,
        display,
        level,
    }

    
    
    public enum Size{
        normal,
        sm,
        lg,        
    }
    
    
    
    public enum Display{
        normal,
        block,     
    }
    
    
    public enum Level{
        primary,
        secondary,
        success,
        danger,
        warning,
        info,
        light,
        dark,
        link,
    }


    
    // ----------- Methode(s) -----------  
    public CommandButtonComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.input.bootstrap.CommandButtonComponent");
                break;
            default:
                setRendererType("lixbox.component.input.bootstrap.CommandButtonComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.input";
    }



    @Override
    public String getGlobalStyle()
    {
        return (String) getStateHelper().eval(PropertyKeys.globalStyle, "bootstrap");
    }
    @Override
    public void setGlobalStyle(String globalStyle)
    {
        getStateHelper().put(PropertyKeys.globalStyle, globalStyle);
    }



    @Override
    public String getStyleClass()
    {
        return (String) getStateHelper().eval(PropertyKeys.styleClass);
    }
    @Override
    public void setStyleClass(String styleClass)
    {
        getStateHelper().put(PropertyKeys.styleClass, styleClass);
    }
    


    public String getIcon()
    {
        return (String) getStateHelper().eval(PropertyKeys.icon);
    }
    public void setIcon(String value)
    {
        getStateHelper().put(PropertyKeys.icon, value);
    }
    
    
    
    public boolean isEscape()
    {
        return (Boolean) getStateHelper().eval(PropertyKeys.escape, true);
    }
    public void setEscape(boolean escape)
    {
        getStateHelper().put(PropertyKeys.escape, escape);
    }
    
    
    
    public boolean isBordered()
    {
        return (Boolean) getStateHelper().eval(PropertyKeys.bordered, false);
    }
    public void setBordered(boolean bordered)
    {
        getStateHelper().put(PropertyKeys.bordered, bordered);
    }
    
    
    
    public boolean isRounded()
    {
        return (Boolean) getStateHelper().eval(PropertyKeys.rounded, false);
    }
    public void setRounded(boolean rounded)
    {
        getStateHelper().put(PropertyKeys.rounded, rounded);
    }
    
    

    public String getConfirmLabel()
    {
        return (String) getStateHelper().eval(PropertyKeys.confirmLabel);
    }
    public void setConfirmLabel(String value)
    {
        getStateHelper().put(PropertyKeys.confirmLabel, value);
    }
    


    public Size getSize()
    {
        return (Size) getStateHelper().eval(PropertyKeys.size, Size.normal);
    }
    public void setSize(Size size)
    {
        getStateHelper().put(PropertyKeys.size, size);
    }
    


    public Display getDisplay()
    {
        return (Display) getStateHelper().eval(PropertyKeys.display, Display.normal);
    }
    public void setDisplay(Display display)
    {
        getStateHelper().put(PropertyKeys.display, display);
    }
    


    public Level getLevel()
    {
        return (Level) getStateHelper().eval(PropertyKeys.level);
    }
    public void setLevel(Level level)
    {
        getStateHelper().put(PropertyKeys.level, level);
    }
}