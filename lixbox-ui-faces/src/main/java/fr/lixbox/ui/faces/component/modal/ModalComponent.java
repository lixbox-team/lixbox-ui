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
package fr.lixbox.ui.faces.component.modal;

import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponentBase;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage d'une modale
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "modal", namespace = "http://www.lixbox.fr/modal")
public class ModalComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        styleClass,
        position,
        size,
    }

    
    
    public enum Size{
        normal,
        sm,
        lg,
        full,
    }

    

    // ----------- Methode(s) -----------  
    public ModalComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.modal.bootstrap.ModalComponent");
                break;
            default:
                setRendererType("lixbox.component.modal.bootstrap.ModalComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.modal";
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
    

    
    public Size getSize()
    {
        return (Size) getStateHelper().eval(PropertyKeys.size, Size.normal);
    }
    public void setSize(Size size)
    {
        getStateHelper().put(PropertyKeys.size, size);
    }
}