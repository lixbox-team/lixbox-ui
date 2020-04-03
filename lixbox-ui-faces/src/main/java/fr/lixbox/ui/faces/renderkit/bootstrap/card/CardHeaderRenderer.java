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
import fr.lixbox.ui.faces.component.card.CardHeaderComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu du body des cards.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.card", rendererType = "lixbox.component.card.bootstrap.CardHeaderComponent")
public class CardHeaderRenderer extends CoreRenderer
{  
    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof CardHeaderComponent))
        {
            throw new NullPointerException();
        }
        CardHeaderComponent component = (CardHeaderComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder("card-header ");        
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(component.getStyleClass());
            sbf.append(" ");
        }
        writer.writeAttribute("class", sbf.toString(), "");
        if(component.getAttributes().get("control")!=null)
        {
            CardControlWidgetComponent control = (CardControlWidgetComponent) component.getAttributes().get("control");
            control.encodeAll(context);
        }
        if (component.getAttributes().get("withControls")!=null && (boolean) component.getAttributes().get("withControls"))
        {
            if (StringUtil.isNotEmpty((String)component.getAttributes().get("title")))
            {
                writer.write("<h5 class=\"card-title\">");
                writer.write((String)component.getAttributes().get("title"));
                writer.write("</h5>");
            }     
            if (StringUtil.isNotEmpty((String)component.getAttributes().get("subtitle")))
            {
                writer.write("<h6 class=\"card-subtitle text-muted\">");
                writer.write((String)component.getAttributes().get("subtitle"));
                writer.write("</h6>");
            }
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