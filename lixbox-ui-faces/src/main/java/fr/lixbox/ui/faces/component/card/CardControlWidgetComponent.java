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
 * Ce composant assure l'affichage d'une ligne
 * 
 * @author ludovic.terral
 */
/**TODO Implémenter le refreshListener*/
@FacesComponent(createTag = true, tagName = "control", namespace = "http://www.lixbox.fr/card")
public class CardControlWidgetComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    protected String globalStyle = "bootstrap";    

    private String styleClass;
    private boolean closible = false;
    private boolean collapsible = false;
    private boolean refreshible = false;
    private String refreshListener;



    // ----------- Methode(s) -----------  
    public CardControlWidgetComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.card.bootstrap.CardControlWidgetComponent");
                break;
            default:
                setRendererType("lixbox.component.card.bootstrap.CardControlWidgetComponent");
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



    public boolean isClosible()
    {
        return closible;
    }
    public void setClosible(boolean closible)
    {
        this.closible = closible;
    }



    public boolean isCollapsible()
    {
        return collapsible;
    }
    public void setCollapsible(boolean collapsible)
    {
        this.collapsible = collapsible;
    }



    public boolean isRefreshible()
    {
        return refreshible;
    }
    public void setRefreshible(boolean refreshible)
    {
        this.refreshible = refreshible;
    }



    public String getRefreshListener()
    {
        return refreshListener;
    }
    public void setRefreshListener(String refreshListener)
    {
        this.refreshListener = refreshListener;
    }
}