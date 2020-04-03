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
package fr.lixbox.ui.faces.renderkit.bootstrap.widget.dropdown;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.ui.faces.component.widget.dropdown.DropDownComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

/**
 * Ce renderer affiche une alert au format bootstrap
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.widget", rendererType = "lixbox.component.widget.bootstrap.DropDownComponent")
public class DropDownRenderer extends CoreRenderer
{    
    private static final String CLASS_ATTRIBUTE = "class";



    // ----------- Methode(s) -----------  
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof DropDownComponent))
        {
            throw new NullPointerException();
        }
        DropDownComponent component = (DropDownComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        
        //dropdown command        
        StringBuilder sbf = new StringBuilder();
        writer.startElement("a", component);
        writer.writeAttribute("href", "#", null);
        if (!component.isView_arrow())
        {
            sbf.append(" arrow-none ");
        }        
        sbf.append(" dropdown-toggle ");
        sbf.append(component.getStyleClass());
        writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), null);
        writer.writeAttribute("data-toggle", "dropdown", "");
        writer.writeAttribute("aria-expanded", "false", "");
        writer.startElement("i", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, component.getIcons(), null);
        writer.endElement("i");
        writer.write(component.getTitle());
        writer.endElement("a");
        
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "dropdown-menu dropdown-menu-"+component.getPosition(), null);
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent component) throws IOException
    {
        if ((context == null) || (component == null))
        {
            throw new NullPointerException();
        }
        ResponseWriter writer = context.getResponseWriter();             
        writer.endElement("div ");
    }    
}