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
@FacesComponent(createTag = true, tagName = "col", namespace = "http://www.lixbox.fr/grid")
public class ColComponent extends UIComponentBase implements LixboxComponent
{    
    // ----------- Attribut(s) -----------
    protected String globalStyle = "bootstrap";    

    private String styleClass;
    private int extraSmall=0;
    private int extraSmallOffset=0;
    private int small=0;
    private int smallOffset=0;
    private int medium=0;
    private int mediumOffset=0;
    private int large=0;
    private int largeOffset=0;
    private int extraLarge=0;
    private int extraLargeOffset=0;



    // ----------- Methode(s) -----------  
    public ColComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.grid.bootstrap.ColComponent");
                break;
            default:
                setRendererType("lixbox.component.grid.bootstrap.ColComponent");
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



    public Integer getExtraSmall()
    {
        return extraSmall;
    }
    public void setExtraSmall(Integer extraSmall)
    {
        this.extraSmall = extraSmall;
    }
    
    
    
    public Integer getExtraSmallOffset()
    {
        return extraSmallOffset;
    }
    public void setExtraSmallOffset(Integer extraSmallOffset)
    {
        this.extraSmallOffset = extraSmallOffset;
    }
    
        
    
    public Integer getSmall()
    {
        return small;
    }
    public void setSmall(Integer small)
    {
        this.small = small;
    }



    public Integer getSmallOffset()
    {
        return smallOffset;
    }
    public void setSmallOffset(Integer smallOffset)
    {
        this.smallOffset = smallOffset;
    }



    public Integer getMedium()
    {
        return medium;
    }
    public void setMedium(Integer medium)
    {
        this.medium = medium;
    }



    public Integer getMediumOffset()
    {
        return mediumOffset;
    }
    public void setMediumOffset(Integer mediumOffset)
    {
        this.mediumOffset = mediumOffset;
    }



    public Integer getLarge()
    {
        return large;
    }
    public void setLarge(Integer large)
    {
        this.large = large;
    }



    public Integer getLargeOffset()
    {
        return largeOffset;
    }
    public void setLargeOffset(Integer largeOffset)
    {
        this.largeOffset = largeOffset;
    }



    public Integer getExtraLarge()
    {
        return extraLarge;
    }
    public void setExtraLarge(Integer extraLarge)
    {
        this.extraLarge = extraLarge;
    }



    public Integer getExtraLargeOffset()
    {
        return extraLargeOffset;
    }
    public void setExtraLargeOffset(Integer extraLargeOffset)
    {
        this.extraLargeOffset = extraLargeOffset;
    }    
}