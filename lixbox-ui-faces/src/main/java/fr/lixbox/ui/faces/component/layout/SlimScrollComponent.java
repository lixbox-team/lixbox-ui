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
package fr.lixbox.ui.faces.component.layout;

import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponentBase;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage d'un content
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "slimscroll", namespace = "http://www.lixbox.fr/layout")
public class SlimScrollComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        styleClass,
        max_height,
    }


    // ----------- Methode(s) -----------  
    public SlimScrollComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.layout.bootstrap.SlimScrollComponent");
                break;
            default:
                setRendererType("lixbox.component.layout.bootstrap.SlimScrollComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.layout";
    }   



    @Override
    public String getGlobalStyle()
    {
        return (String) getStateHelper().eval(PropertyKeys.globalStyle, "bootstrap");
    }
    @Override
    public void setGlobalStyle(String value)
    {
        getStateHelper().put(PropertyKeys.globalStyle, value);
    }



    public String getMax_height()
    {
        return (String) getStateHelper().eval(PropertyKeys.max_height, "330px");
    }
    public void setMax_height(String value)
    {
        getStateHelper().put(PropertyKeys.max_height, value);
    }
}