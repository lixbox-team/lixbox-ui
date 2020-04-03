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
package fr.lixbox.ui.faces.renderkit.bootstrap.card;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.card.CardGroupComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu des groupes de cards.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.card", rendererType = "lixbox.component.card.bootstrap.CardGroupComponent")
public class CardGroupRenderer extends CoreRenderer
{  
    private static final String CLASS_ATTRIBUTE = "class";



    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof CardGroupComponent))
        {
            throw new NullPointerException();
        }
        CardGroupComponent component = (CardGroupComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        StringBuilder sbf = new StringBuilder();
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(component.getStyleClass());
            sbf.append(" ");
        }  
        writer.startElement("div", component);
        switch(component.getType())
        {
            case "deck":
                writer.writeAttribute(CLASS_ATTRIBUTE, "card-deck-wrapper", "");
                writer.startElement("div", component);      
                sbf.append("card-deck");
                writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), "");
                break;
            case "column":
                sbf.append("card-columns"); 
                writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), "");    
            break;
            default:
                sbf.append("card-group");     
                writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), "");         
            break;            
        }  
        ComponentUtils.renderPassThroughAttributes(context, uicomponent);
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent uicomponent) throws IOException
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof CardGroupComponent))
        {
            throw new NullPointerException();
        }
        CardGroupComponent component = (CardGroupComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();         
        switch(component.getType())
        {
            case "deck":    
                writer.endElement("div");    
                writer.endElement("div");
                break;
            default:    
                writer.endElement("div");    
            break;            
        }  
    }
}