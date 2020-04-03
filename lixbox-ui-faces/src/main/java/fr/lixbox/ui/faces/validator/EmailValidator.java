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
package fr.lixbox.ui.faces.validator;

import java.util.ResourceBundle;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

/**
 * Ce validator verifie les adresses email
 * 
 * @author ludovic.terral
 */
@SuppressWarnings("rawtypes")
@FacesValidator(value = "emailValidator")
public class EmailValidator implements Validator
{
    // ----------- Attribut(s) -----------  
    private ResourceBundle bundle = ResourceBundle.getBundle("MessageValidator");



    // ----------- Methode(s) -----------  
    @Override
    public void validate(FacesContext context, UIComponent component, Object value)
    {
        try
        {
            InternetAddress email = new InternetAddress((String) value);
            email.validate();
        }
        catch (AddressException e)
        {
            FacesMessage messages = new FacesMessage(FacesMessage.SEVERITY_ERROR, null, bundle.getString("fr.lixtec.lixbox.ui.faces.validator.constraints.Email.message"));
            throw new ValidatorException(messages);
        }
    }
}