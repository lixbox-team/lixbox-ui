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
package fr.lixbox.ui.faces.renderkit.bootstrap.input;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import com.sun.faces.renderkit.RenderKitUtils;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.input.DropboxComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

/**
 * Ce renderer assure le rendu des CommandButton.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.input", rendererType = "lixbox.component.input.bootstrap.DropboxComponent")
public class DropboxRenderer extends CoreRenderer
{  
    private static final String CLASS_ATTRIBUTE = "class";
    private static final String DISABLED_ATTRIBUTE = "disabled";
    private static final String BUTTON_ELEMENT = "button";


    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent component)
          throws IOException 
    {
        rendererParamsNotNull(context, component);
        if (!shouldEncode(component)) 
        {
            return;
        }
        
        DropboxComponent button = (DropboxComponent) component;
        RenderKitUtils.renderJsfJsIfNecessary(context);
        ResponseWriter writer = context.getResponseWriter();
        String clientId = button.getClientId(context);
        Object value = button.getValue();
        String icon = button.getIcon();
        String title = button.getTitle();
        writer.startElement(BUTTON_ELEMENT, button);
        writer.writeAttribute("id", clientId, "id");
        writer.writeAttribute("name", clientId, "name");
        
        StringBuilder sbf = new StringBuilder("btn ");
        if (button.isBordered())
        {
            sbf.append("btn-outline-");
        }
        else
        {
            sbf.append("btn-");
        }
        sbf.append(button.getLevel());
        if (button.isRounded())
        {
            sbf.append(" btn-rounded");
        }
        switch(button.getDisplay())
        {
            case block:                
                sbf.append(" btn-block");
                break;
            default:
                break;
        }
        switch(button.getSize())
        {
            case lg:                
                sbf.append(" btn-lg");
                break;
            case sm:                
                sbf.append(" btn-sm");
                break;
            default:
                break;
        }
        sbf.append(" dropdown-toggle");
        if (StringUtil.isNotEmpty(button.getStyleClass()))
        {
            sbf.append(" ");
            sbf.append(button.getStyleClass());
        }
        writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), "styleClass");
        writer.writeAttribute("type", BUTTON_ELEMENT, "type");
        
        writer.writeAttribute("data-toggle", "dropdown", "data-toggle");
        if (button.isDisabled())
        {
            writer.writeAttribute(DISABLED_ATTRIBUTE, DISABLED_ATTRIBUTE, DISABLED_ATTRIBUTE);
        }
        if (StringUtil.isNotEmpty(button.getTitle()))
        {
            writer.writeAttribute("title", button.getTitle(), "title");
        }
        if (StringUtil.isNotEmpty(button.getOnclick()))
        {
            writer.writeAttribute("onClick", button.getOnclick(), "onClick");
        }
        
        // icon
        if (!StringUtil.isEmpty(icon))
        {
            writer.startElement("em", null);
            writer.writeAttribute(CLASS_ATTRIBUTE, title!=null||value!=null?"mr-1 "+icon:icon, null);
            writer.endElement("em");
        }
        
        
        // text
        writer.startElement("span", null);
        if (value != null)
        {
            if (button.isEscape())
            {
                writer.writeText(value, "value");
            }
            else
            {
                writer.write(value.toString());
            }
        }
        writer.endElement("span");
        writer.endElement(BUTTON_ELEMENT);
        writer.startElement("div",button);
        writer.writeAttribute(CLASS_ATTRIBUTE, "dropdown-menu", CLASS_ATTRIBUTE);
    }

    
    
    @Override
    public void encodeChildren(FacesContext context, UIComponent component) throws IOException 
    {
        for (UIComponent child : component.getChildren())
        {
            child.getAttributes().put("styleClass", "dropdown-item");
            child.encodeAll(context);
        }
    }
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent component) throws IOException 
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.endElement("div");
    }
}