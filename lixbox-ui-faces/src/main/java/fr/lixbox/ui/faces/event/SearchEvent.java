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
package fr.lixbox.ui.faces.event;

import javax.faces.component.UIComponent;
import javax.faces.component.behavior.Behavior;
import javax.faces.event.AjaxBehaviorEvent;
import javax.faces.event.AjaxBehaviorListener;
import javax.faces.event.FacesListener;

/**
 * Cet event est lors de la recherche d'un objet.
 * 
 * @author ludovic.terral
 */
public class SearchEvent extends AjaxBehaviorEvent
{
    // ----------- Attribut(s) -----------
    private static final long serialVersionUID = 20181121112614L;
    
    private String search;
    
    

    // ----------- Methode(s) -----------
    public SearchEvent(UIComponent component, Behavior behavior, String search) 
    {
        super(component, behavior);
        this.search = search;
    }
    
    

    @Override
    public boolean isAppropriateListener(FacesListener listener) 
    {
        return (listener instanceof AjaxBehaviorListener);
    }

    
    
    @Override
    public void processListener(FacesListener listener) 
    {
        ((AjaxBehaviorListener) listener).processAjaxBehavior(this);
    }

    
    
    
    public String getSearch()
    {
        return search;
    }
}
