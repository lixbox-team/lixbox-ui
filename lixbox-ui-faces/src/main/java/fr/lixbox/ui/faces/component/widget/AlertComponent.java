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
package fr.lixbox.ui.faces.component.widget;

import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponentBase;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage du widget alert
 * 
 * @author ludovic.terral
 */
@FacesComponent("lixbox.component.widget.AlertComponent")
public class AlertComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        styleClass,
        level,
        dismissible,
        hardAlert,
    }



    // ----------- Methode(s) -----------  
    public AlertComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.widget.bootstrap.AlertComponent");
                break;
            default:
                setRendererType("lixbox.component.widget.bootstrap.AlertComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.widget";
    }   
    
    
    
    @Override 
    public boolean getRendersChildren() 
    { 
        return true; 
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
    
    
    
    public String getLevel()
    {
        return (String) getStateHelper().eval(PropertyKeys.level);
    }
    public void setLevel(String level)
    {
        getStateHelper().put(PropertyKeys.level, level);
    }
    
          
    
    public boolean isHardAlert()
    {
        return (boolean) getStateHelper().eval(PropertyKeys.hardAlert, false);
    }
    public void setHardAlert(boolean value)
    {
        getStateHelper().put(PropertyKeys.hardAlert, value);
    }
    
            
    
    public boolean isDismissible()
    {
        return (boolean) getStateHelper().eval(PropertyKeys.dismissible, false);
    }
    public void setDismissible(boolean value)
    {
        getStateHelper().put(PropertyKeys.dismissible, value);
    }    
}