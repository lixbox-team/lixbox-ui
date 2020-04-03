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
import fr.lixbox.ui.faces.component.card.CardControlWidgetComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu des cards.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.card", rendererType = "lixbox.component.card.bootstrap.CardControlWidgetComponent")
public class CardControlWidgetRenderer extends CoreRenderer
{  
    private static final String ARIA_CONTROLS_ATTRIBUTE = "aria-controls";
    private static final String CLASS_ATTRIBUTE = "class";



    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof CardControlWidgetComponent))
        {
            throw new NullPointerException();
        }
        CardControlWidgetComponent component = (CardControlWidgetComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder("card-widgets ");        
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(component.getStyleClass());
            sbf.append(" ");
        }
        writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), "");

        if (component.isRefreshible())
        {
            /* <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>*/
        }

        if (component.isCollapsible())
        {
            writer.startElement("a", component);
            writer.writeAttribute("data-toggle", "collapse", "");
            writer.writeAttribute("href", "#"+component.getAttributes().get(ARIA_CONTROLS_ATTRIBUTE), "");
            writer.writeAttribute("role", "button", "");
            writer.writeAttribute("aria-expanded", "false", "");
            writer.writeAttribute(ARIA_CONTROLS_ATTRIBUTE, component.getAttributes().get(ARIA_CONTROLS_ATTRIBUTE), "");
            writer.startElement("i", component);
            writer.writeAttribute(CLASS_ATTRIBUTE, "mdi mdi-minus", "");
            writer.endElement("i");
            writer.endElement("a");
        }

        if (component.isClosible())
        {
            writer.startElement("a", component);
            writer.writeAttribute("data-toggle", "remove", "");
            writer.writeAttribute("href", "#", "");            
            writer.startElement("i", component);
            writer.writeAttribute(CLASS_ATTRIBUTE, "mdi mdi-close", "");
            writer.endElement("i");
            writer.endElement("a");
        }
        ComponentUtils.renderPassThroughAttributes(context, uicomponent);
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent component) throws IOException
    {
        if ((context == null) || (component == null))
        {
            throw new NullPointerException();
        }
        ResponseWriter writer = context.getResponseWriter();             
        writer.endElement("div");
    }
}