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

import java.io.Serializable;

import javax.faces.component.UIComponent;
import javax.faces.component.behavior.Behavior;
import javax.faces.event.AjaxBehaviorEvent;
import javax.faces.event.AjaxBehaviorListener;
import javax.faces.event.FacesListener;

/**
 * Cet event est emis sur selection d'un objet.
 * 
 * @author ludovic.terral
 */
public class SelectEvent extends AjaxBehaviorEvent
{
    // ----------- Attribut(s) -----------
    private static final long serialVersionUID = -7956468058872609438L;
    
    private Serializable object;



    // ----------- Methode(s) -----------
    public SelectEvent(UIComponent component, Behavior behavior, Serializable object)
    {
        super(component, behavior);
        this.object = object;
    }



    @Override
    public boolean isAppropriateListener(FacesListener faceslistener)
    {
        return (faceslistener instanceof AjaxBehaviorListener);
    }



    @Override
    public void processListener(FacesListener faceslistener)
    {
        ((AjaxBehaviorListener) faceslistener).processAjaxBehavior(this);
    }



    public Object getObject()
    {
        return object;
    }
}