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
import fr.lixbox.ui.faces.component.card.CardBodyComponent;
import fr.lixbox.ui.faces.component.card.CardControlWidgetComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu du body des cards.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.card", rendererType = "lixbox.component.card.bootstrap.CardBodyComponent")
public class CardBodyRenderer extends CoreRenderer
{  
    private static final String WITH_CONTROLS_ATTRIBUTE = "withControls";



    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof CardBodyComponent))
        {
            throw new NullPointerException();
        }
        CardBodyComponent component = (CardBodyComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder();
        if(component.isImgOverlay())
        {
            sbf.append("card-img-overlay ");            
        }
        else
        {
            sbf.append("card-body ");
        }
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
        if ( component.getAttributes().get(WITH_CONTROLS_ATTRIBUTE)==null || 
                (component.getAttributes().get(WITH_CONTROLS_ATTRIBUTE)!=null && !(boolean) component.getAttributes().get(WITH_CONTROLS_ATTRIBUTE)))
        {
            if (StringUtil.isNotEmpty(component.getTitle()))
            {
                writer.write("<h5 class=\"card-title\">");
                writer.write(component.getTitle());
                writer.write("</h5>");
            }     
            if (StringUtil.isNotEmpty(component.getSubtitle()))
            {
                writer.write("<h6 class=\"card-subtitle text-muted\">");
                writer.write(component.getSubtitle());
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