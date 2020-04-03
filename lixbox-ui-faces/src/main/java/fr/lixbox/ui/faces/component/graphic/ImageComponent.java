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

import java.io.IOException;

import javax.faces.component.FacesComponent;
import javax.faces.component.html.HtmlGraphicImage;
import javax.faces.context.FacesContext;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage d'une image
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "image", namespace = "http://www.lixbox.fr/graphic")
public class ImageComponent extends HtmlGraphicImage implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    protected String globalStyle = "bootstrap";    



    // ----------- Methode(s) -----------  
    public ImageComponent() 
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
                this.setStyleClass("img-fluid "+this.getStyleClass());
                break;
            default:
                this.setStyleClass("img-fluid "+this.getStyleClass());
                break;
        }
        super.encodeBegin(context);
    }
    


    @Override
    public String getGlobalStyle()
    {
        return globalStyle;
    }
    @Override
    public void setGlobalStyle(String globalStyle)
    {
        this.globalStyle = globalStyle;
    }
}