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

import java.io.IOException;

import javax.faces.component.FacesComponent;
import javax.faces.component.html.HtmlCommandLink;
import javax.faces.context.FacesContext;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage d'une image
 * 
 * @author ludovic.terral
 */
@FacesComponent("lixbox.component.widget.dropdown.DropDownItemComponent")
public class DropDownItemComponent extends HtmlCommandLink implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    protected enum PropertyKeys {
        globalStyle;
    }



    // ----------- Methode(s) -----------  
    public DropDownItemComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
    }
    
    
    
    @Override 
    public boolean getRendersChildren() 
    { 
     return true; 
    }   
   
    
    
    @Override
    public void encodeBegin(FacesContext context) throws IOException 
    {
        switch (getGlobalStyle())
        {
            case "bootstrap":
                this.setStyleClass("dropdown-item "+this.getStyleClass());
                break;
            default:
                this.setStyleClass("dropdown-item "+this.getStyleClass());
                break;
        }
        super.encodeBegin(context);
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
}