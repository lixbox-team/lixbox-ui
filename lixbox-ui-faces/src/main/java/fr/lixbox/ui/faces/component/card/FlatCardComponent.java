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
package fr.lixbox.ui.faces.component.card;

import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponentBase;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage du contenu d'une carte
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "flat", namespace = "http://www.lixbox.fr/card")
public class FlatCardComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        styleClass,
        title,
        title_hint,
        icon_styles,
        value,
    }



    // ----------- Methode(s) -----------  
    public FlatCardComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.card.bootstrap.FlatCardComponent");
                break;
            default:
                setRendererType("lixbox.component.card.bootstrap.FlatCardComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.card";
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
        return (String) getStateHelper().eval(PropertyKeys.styleClass);
    }
    public void setStyleClass(String styleClass)
    {
        getStateHelper().put(PropertyKeys.styleClass, styleClass);
    }
    


    public String getTitle()
    {
        return (String) getStateHelper().eval(PropertyKeys.title);
    }
    public void setTitle(String value)
    {
        getStateHelper().put(PropertyKeys.title, value);
    }



    public String getTitle_hint()
    {
        return (String) getStateHelper().eval(PropertyKeys.title_hint);
    }
    public void setTitle_hint(String value)
    {
        getStateHelper().put(PropertyKeys.title_hint, value);
    }
    


    public String getIcon_styles()
    {
        return (String) getStateHelper().eval(PropertyKeys.icon_styles);
    }
    public void setIcon_styles(String value)
    {
        getStateHelper().put(PropertyKeys.icon_styles, value);
    }



    public String getValue()
    {
        return (String) getStateHelper().eval(PropertyKeys.value);
    }
    public void setValue(String value)
    {
        getStateHelper().put(PropertyKeys.value, value);
    }    
}