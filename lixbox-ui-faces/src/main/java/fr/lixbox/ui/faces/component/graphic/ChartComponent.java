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
package fr.lixbox.ui.faces.component.graphic;

import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponentBase;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage d'un content
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "chart", namespace = "http://www.lixbox.fr/graphic")
public class ChartComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    private enum PropertyKeys {
        globalStyle,
        type,
    }


    // ----------- Methode(s) -----------  
    public ChartComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.graphic.bootstrap.ChartComponent");
                break;
            default:
                setRendererType("lixbox.component.graphic.bootstrap.ChartComponent");
                break;
        }  
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.graphic";
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
    
    
    
    public String getType()
    {
        return (String) getStateHelper().eval(PropertyKeys.type);
    }
    public void setType(String value)
    {
        getStateHelper().put(PropertyKeys.type, value);
    }



    public String getStyleClass()
    {
        // TODO Auto-generated method stub
        return null;
    }



    public String getMax_height()
    {
        // TODO Auto-generated method stub
        return null;
    }
}