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
import fr.lixbox.ui.faces.component.layout.NavbarComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

@FacesRenderer(componentFamily = "lixbox.component.layout", rendererType = "lixbox.component.layout.bootstrap.NavbarComponent")
public class NavbarRenderer extends CoreRenderer
{    
    private static final String CLASS_ATTRIBUTE = "class";



    // ----------- Methode(s) -----------
    @Override
    public void encodeBegin(FacesContext context, UIComponent component) throws IOException 
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "navbar-custom", null);  
    }

    
    
    @Override
    public void encodeChildren(FacesContext context, UIComponent component) throws IOException 
    {           
        String orientation = extractOrientation(component);
        if ("vertical".equals(orientation))
        {
            encodeButton(context, (NavbarComponent)component);
        }
        super.encodeChildren(context, component);
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

    
    
    /**
     * Cette methode extrait l'orientation du layout
     * 
     * @param component
     * 
     * @return orientation
     */
    private String extractOrientation(UIComponent component)
    {
        String orientation = "vertical";
        if (component.getParent() instanceof NavbarComponent && component.getParent().getParent() instanceof LayoutComponent)
        {
            orientation = ((LayoutComponent)component.getParent().getParent()).getOrientation();
        }
        return orientation;
    }
    
    
    
    /**
     * Cette methode encode le button d'ouverture ou de fermeture du menu
     * 
     * @param context
     * @param component
     */
    private void encodeButton(FacesContext context, NavbarComponent component) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("button", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "button-menu-mobile open-left disable-btn", null);
        writer.startElement("i", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "mdi mdi-menu", null);
        writer.endElement("i");
        writer.endElement("button");        
    }
}