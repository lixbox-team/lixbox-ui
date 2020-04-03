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
package fr.lixbox.ui.faces.renderkit.bootstrap.layout;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

@FacesRenderer(componentFamily = "lixbox.component.layout", rendererType = "lixbox.component.layout.bootstrap.FooterComponent")
public class FooterRenderer extends CoreRenderer
{    
    private static final String CLASS_ATTRIBUTE = "class";
    private static final String FOOTER_ELEMENT = "footer";


    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent component) throws IOException 
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement(FOOTER_ELEMENT, component);
        writer.writeAttribute(CLASS_ATTRIBUTE, FOOTER_ELEMENT, null);  
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "container-fluid", "");  
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "row", "");
        ComponentUtils.renderPassThroughAttributes(context, component);
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
        writer.endElement(FOOTER_ELEMENT);
    }
}