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
package fr.lixbox.ui.faces.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

/**
 * Cette classe assure la convertion des caracteres en UTF-8
 * 
 * @author ludovic.terral
 */
@WebFilter("/*")
public class CharacterEncodingFilter implements Filter
{
    // ----------- Methode(s) -----------
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws ServletException, IOException
    {
        request.setCharacterEncoding("UTF-8");
        chain.doFilter(request, response);
    }



    @Override
    public void destroy()
    {
        // Pas d'action specifique
    }



    @Override
    public void init(FilterConfig arg0) throws ServletException
    {
        // Pas d'action specifique
    }
}