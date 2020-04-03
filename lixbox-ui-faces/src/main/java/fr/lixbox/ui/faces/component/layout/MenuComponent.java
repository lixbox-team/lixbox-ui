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
 * Ce composant assure l'affichage du menu dans le layout
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "menu", namespace = "http://www.lixbox.fr/layout")
public class MenuComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    protected String globalStyle = "bootstrap";    




    // ----------- Methode(s) -----------  
    public MenuComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.layout.bootstrap.MenuComponent");
                break;
            default:
                setRendererType("lixbox.component.layout.bootstrap.MenuComponent");
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
        return globalStyle;
    }
    @Override
    public void setGlobalStyle(String globalStyle)
    {
        this.globalStyle = globalStyle;
    }
}