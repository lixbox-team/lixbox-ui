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
package fr.lixbox.ui.faces.component.widget.dropdown;

import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponentBase;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage du contenu d'une carte
 * 
 * @author ludovic.terral
 */
@FacesComponent("lixbox.component.widget.dropdown.DropDownComponent")
public class DropDownComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        styleClass, 
        title,  
        position,
        view_arrow,     
        icons,
    }



    // ----------- Methode(s) -----------  
    public DropDownComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.widget.bootstrap.DropDownComponent");
                break;
            default:
                setRendererType("lixbox.component.widget.bootstrap.DropDownComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.widget";
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



    public String getStyleClass()
    {
        return (String) getStateHelper().eval(PropertyKeys.styleClass, "");
    }
    public void setStyleClass(String styleClass)
    {
        getStateHelper().put(PropertyKeys.styleClass, styleClass);
    }



    public boolean isView_arrow()
    {
        return (boolean) getStateHelper().eval(PropertyKeys.view_arrow, true);
    }
    public void setView_arrow(boolean value)
    {
        getStateHelper().put(PropertyKeys.view_arrow, value);
    }



    public String getPosition()
    {
        return (String) getStateHelper().eval(PropertyKeys.position, "right");
    }
    public void setPosition(String value)
    {
        getStateHelper().put(PropertyKeys.position, value);
    }



    public String getTitle()
    {
        return (String) getStateHelper().eval(PropertyKeys.title, "");
    }
    public void setTitle(String value)
    {
        getStateHelper().put(PropertyKeys.title, value);
    }



    public String getIcons()
    {
        return (String) getStateHelper().eval(PropertyKeys.icons, "");
    }
    public void setIcons(String value)
    {
        getStateHelper().put(PropertyKeys.icons, value);
    }  
}