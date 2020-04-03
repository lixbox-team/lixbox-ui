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
package fr.lixbox.ui.faces.component.input;

import javax.faces.component.FacesComponent;

import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage du contenu d'un CommandButtonComponent
 * 
 * @author ludovic.terral
 */
@FacesComponent(createTag = true, tagName = "dropbox", namespace = "http://www.lixbox.fr/input")
public class DropboxComponent extends CommandButtonComponent
{    
    // ----------- Methode(s) -----------  
    public DropboxComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.input.bootstrap.DropboxComponent");
                break;
            default:
                setRendererType("lixbox.component.input.bootstrap.DropboxComponent");
                break;
        }
    }
}