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
package fr.lixbox.ui.faces.util;

import java.security.Principal;

import javax.faces.context.FacesContext;

/**
 * Cette utilitaire fournit des methodes pour travailler sur JSF
 * 
 * @author ludovic.terral
 */
public class SecurityUtils
{
    // ----------- Methode(s) -----------  
    private SecurityUtils()
    {
    }



    public static boolean ifGranted(String role)
    {
        return FacesContext.getCurrentInstance().getExternalContext().isUserInRole(role);
    }



    public static boolean ifAllGranted(String value)
    {
        String[] roles = value.split(",");
        boolean isAuthorized = false;
        for (String role : roles)
        {
            if (ifGranted(role.trim()))
            {
                isAuthorized = true;
            }
            else
            {
                isAuthorized = false;
                break;
            }
        }
        return isAuthorized;
    }



    public static boolean ifAnyGranted(String value)
    {
        String[] roles = value.split(",");
        boolean isAuthorized = false;
        for (String role : roles)
        {
            if (ifGranted(role.trim()))
            {
                isAuthorized = true;
                break;
            }
        }
        return isAuthorized;
    }



    public static boolean ifNoneGranted(String value)
    {
        String[] roles = value.split(",");
        boolean isAuthorized = false;
        for (String role : roles)
        {
            if (ifGranted(role.trim()))
            {
                isAuthorized = false;
                break;
            }
            else
            {
                isAuthorized = true;
            }
        }
        return isAuthorized;
    }



    public static String remoteUser()
    {
        return FacesContext.getCurrentInstance().getExternalContext().getRemoteUser();
    }



    public static Principal userPrincipal()
    {
        return FacesContext.getCurrentInstance().getExternalContext().getUserPrincipal();
    }
}