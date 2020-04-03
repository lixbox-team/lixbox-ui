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
package fr.lixbox.ui.faces.handler;

import java.util.Locale;

import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;

import com.sun.faces.application.view.MultiViewHandler;

/**
 * Cette classe contribue a la selection de la langue
 * 
 * @author ludovic.terral
 */
public class ViewHandler extends MultiViewHandler
{
    @Override
    public Locale calculateLocale(FacesContext context)
    {
        HttpSession session = (HttpSession) context.getExternalContext().getSession(false);
        if (session != null)
        {
            Locale locale = (Locale) session.getAttribute("locale");
            if (locale != null)
            {
                return locale;
            }
        }
        return super.calculateLocale(context);
    }
}