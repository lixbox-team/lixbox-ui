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
package fr.lixbox.ui.faces.component.listgroup;

import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponentBase;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage d'une liste de buttons
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "buttonsGroup", namespace = "http://www.lixbox.fr/listgroup")
public class ButtonsGroupComponent extends UIComponentBase implements LixboxComponent
{    
 // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        styleClass,
        orientation,        
    }
    
    
    
    public enum Orientation{
        horizontal,
        vertical,
    }



    // ----------- Methode(s) -----------  
    public ButtonsGroupComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.listgroup.bootstrap.ButtonsGroupComponent");
                break;
            default:
                setRendererType("lixbox.component.listgroup.bootstrap.ButtonsGroupComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.listgroup";
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



    public Orientation getOrientation()
    {
        return (Orientation) getStateHelper().eval(PropertyKeys.orientation, Orientation.horizontal);
    }
    public void setOrientation(Orientation orientation)
    {
        getStateHelper().put(PropertyKeys.orientation, orientation);
    }
}