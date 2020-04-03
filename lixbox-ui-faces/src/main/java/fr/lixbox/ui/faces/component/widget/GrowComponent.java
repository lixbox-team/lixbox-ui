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
 * Ce composant assure l'affichage du widget grow
 * 
 * @author ludovic.terral
 */
@FacesComponent("lixbox.component.widget.GrowComponent")
public class GrowComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        styleClass,
        level,
        title,
        description,
        position,
        refer_id,
        refer_event,
    }
    



    // ----------- Methode(s) -----------  
    public GrowComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.widget.bootstrap.GrowComponent");
                break;
            default:
                setRendererType("lixbox.component.widget.bootstrap.GrowComponent");
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
    


    public String getTitle()
    {
        return (String) getStateHelper().eval(PropertyKeys.title);
    }
    public void setTitle(String value)
    {
        getStateHelper().put(PropertyKeys.title, value);
    }



    public String getDescription()
    {
        return (String) getStateHelper().eval(PropertyKeys.description);
    }
    public void setDescription(String value)
    {
        getStateHelper().put(PropertyKeys.description, value);
    }



    public String getPosition()
    {
        return (String) getStateHelper().eval(PropertyKeys.position);
    }
    public void setPosition(String value)
    {
        getStateHelper().put(PropertyKeys.position, value);
    }



    public String getRefer_id()
    {
        return (String) getStateHelper().eval(PropertyKeys.refer_id);
    }
    public void setRefer_id(String value)
    {
        getStateHelper().put(PropertyKeys.refer_id, value);
    }



    public String getRefer_event()
    {
        return (String) getStateHelper().eval(PropertyKeys.refer_event);
    }
    public void setRefer_event(String value)
    {
        getStateHelper().put(PropertyKeys.refer_event, value);
    }    
}