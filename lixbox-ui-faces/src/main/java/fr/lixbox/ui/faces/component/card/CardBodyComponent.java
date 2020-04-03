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
@FacesComponent(createTag = true, tagName = "body", namespace = "http://www.lixbox.fr/card")
public class CardBodyComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    protected String globalStyle = "bootstrap";    
    private String styleClass;
    private String title;
    private String subtitle;
    private boolean imgOverlay=false;



    // ----------- Methode(s) -----------  
    public CardBodyComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.card.bootstrap.CardBodyComponent");
                break;
            default:
                setRendererType("lixbox.component.card.bootstrap.CardBodyComponent");
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
        return globalStyle;
    }
    @Override
    public void setGlobalStyle(String globalStyle)
    {
        this.globalStyle = globalStyle;
    }



    public String getStyleClass()
    {
        return styleClass;
    }
    public void setStyleClass(String styleClass)
    {
        this.styleClass = styleClass;
    }



    public String getTitle()
    {
        return title;
    }
    public void setTitle(String title)
    {
        this.title = title;
    }



    public String getSubtitle()
    {
        return subtitle;
    }
    public void setSubtitle(String subtitle)
    {
        this.subtitle = subtitle;
    }



    public boolean isImgOverlay()
    {
        return imgOverlay;
    }
    public void setImgOverlay(boolean imgOverlay)
    {
        this.imgOverlay = imgOverlay;
    }    
}