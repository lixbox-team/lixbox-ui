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

import fr.lixbox.ui.faces.component.layout.LayoutComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

@FacesRenderer(componentFamily = "lixbox.component.layout", rendererType = "lixbox.component.layout.bootstrap.MenuComponent")
public class MenuRenderer extends CoreRenderer
{    
    // ----------- Methode(s) -----------
    @Override
    public void encodeBegin(FacesContext context, UIComponent component) throws IOException 
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        String orientation = (component.getParent() instanceof LayoutComponent)?((LayoutComponent)component.getParent()).getOrientation():"vertical";
        if ("vertical".equals(orientation))
        {
            writer.writeAttribute("class", "left-side-menu", null);
        }
        else
        {
            writer.writeAttribute("class", "topnav", null);
        }
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
    }
}