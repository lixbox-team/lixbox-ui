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
package fr.lixbox.ui.faces.component.grid;

import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponentBase;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage d'une ligne
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "row", namespace = "http://www.lixbox.fr/grid")
public class RowComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------    
    private enum PropertyKeys {
        globalStyle,
        styleClass,
        gutter,
        align,
        rendered,
    }



    // ----------- Methode(s) -----------  
    public RowComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.grid.bootstrap.RowComponent");
                break;
            default:
                setRendererType("lixbox.component.grid.bootstrap.RowComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.grid";
    }
        


    @Override
    public String getGlobalStyle()
    {
        return getStateHelper().eval(PropertyKeys.globalStyle, "bootstrap").toString();
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



    public boolean isGutter()
    {
        return (boolean) getStateHelper().eval(PropertyKeys.gutter, Boolean.TRUE);        
    }    
    public void setGutter(boolean gutter)
    {
        getStateHelper().put(PropertyKeys.gutter, gutter);
    }



    public String getAlign()
    {
        return (String) getStateHelper().eval(PropertyKeys.align, "");
    }
    public void setAlign(String align)
    {
        getStateHelper().put(PropertyKeys.align, align);
    }
}