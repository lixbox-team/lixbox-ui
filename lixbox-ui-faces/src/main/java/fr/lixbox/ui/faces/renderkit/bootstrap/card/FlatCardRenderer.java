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
import fr.lixbox.ui.faces.component.card.FlatCardComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu des flat cards.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.card", rendererType = "lixbox.component.card.bootstrap.FlatCardComponent")
public class FlatCardRenderer extends CoreRenderer
{  
    private static final String CLASS_ELEMENT = "class";



    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof FlatCardComponent))
        {
            throw new NullPointerException();
        }
        FlatCardComponent component = (FlatCardComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder("card widget-flat ");        
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(component.getStyleClass());
            sbf.append(" ");
        }
        writer.writeAttribute(CLASS_ELEMENT, sbf.toString(), "");
                
        
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ELEMENT, "card-body ", null);
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ELEMENT, "float-right ", null);
        writer.write("<i class=\""+component.getIcon_styles()+"\"></i>");
        writer.endElement("div");
        writer.write("<h5 class=\"text-muted font-weight-normal mt-0\" title=\""+component.getTitle_hint()+"\">"+component.getTitle()+"</h5>");
        if (StringUtil.isNotEmpty(component.getValue()))
        {
            writer.write("<h3 class=\"mt-3 mb-3\">"+component.getValue()+"</h3>");
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
        writer.endElement("div");
    }
}