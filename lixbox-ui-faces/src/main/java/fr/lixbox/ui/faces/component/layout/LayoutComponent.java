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
 * Ce composant assure l'affichage d'un layout
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "layout", namespace = "http://www.lixbox.fr/layout")
public class LayoutComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    protected String globalStyle = "bootstrap";    

    private String orientation="vertical";
    private boolean boxed=false;


    
    // ----------- Methode(s) -----------  
    public LayoutComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.layout.bootstrap.LayoutComponent");
                break;
            default:
                setRendererType("lixbox.component.layout.bootstrap.LayoutComponent");
                break;
        }
    }


    
    @Override
    public String getFamily()
    {
        return "lixbox.component.layout";
    }
    
    
    
    @Override 
    public boolean getRendersChildren() 
    { 
        return true; 
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



    public String getOrientation()
    {
        return orientation;
    }
    public void setOrientation(String orientation)
    {
        this.orientation = orientation;
    }



    public boolean isBoxed()
    {
        return boxed;
    }
    public void setBoxed(boolean boxed)
    {
        this.boxed = boxed;
    }
}