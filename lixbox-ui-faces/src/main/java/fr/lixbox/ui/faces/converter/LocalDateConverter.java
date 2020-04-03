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
package fr.lixbox.ui.faces.converter;

import java.time.LocalDate;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;

import fr.lixbox.common.util.DateUtil;

/**
 * Converteur pour l'affichage et la saisie de java.time.LocalDate
 * 
 * @author virgile.de-lacerda
 *
 */
@SuppressWarnings("rawtypes")
@FacesConverter(forClass = LocalDate.class)
public class LocalDateConverter implements Converter
{
    // ----------- Methode(s) -----------  
    @Override
    public Object getAsObject(FacesContext context, UIComponent component, String value)
    {
        LocalDate result = null;
        if (value != null && !value.isEmpty())
        {
            result = DateUtil.parseLocalDate(value, "dd/MM/yyyy");
        }
        return result;
    }



    @Override
    public String getAsString(FacesContext context, UIComponent component, Object value)
    {
        String result = null;
        if (null != value)
        {
            result = DateUtil.format((LocalDate) value, "dd/MM/yyyy");
        }
        return result;
    }
}