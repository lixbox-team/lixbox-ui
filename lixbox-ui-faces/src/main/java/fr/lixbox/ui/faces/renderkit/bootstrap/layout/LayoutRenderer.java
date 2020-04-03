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

import fr.lixbox.ui.faces.component.layout.ContentComponent;
import fr.lixbox.ui.faces.component.layout.FooterComponent;
import fr.lixbox.ui.faces.component.layout.LayoutComponent;
import fr.lixbox.ui.faces.component.layout.MenuComponent;
import fr.lixbox.ui.faces.component.layout.NavbarComponent;
import fr.lixbox.ui.faces.component.layout.ScriptGroupComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

@FacesRenderer(componentFamily = "lixbox.component.layout", rendererType = "lixbox.component.layout.bootstrap.LayoutComponent")
public class LayoutRenderer extends CoreRenderer
{    
    // ----------- Methode(s) -----------   
    private static final String CSS_MIME_TYPE = "text/css";
    private static final String STYLESHEET_ATTRIBUTE = "stylesheet";
    private static final String CLASS_ATTRIBUTE = "class";
    
    private MenuComponent menu;
    private NavbarComponent navbar;
    private FooterComponent footer;
    private ContentComponent content;
    private ScriptGroupComponent scriptGroup;
    
    
    
    @Override
    public void encodeBegin(FacesContext context, UIComponent component) throws IOException 
    {       
        LayoutComponent layoutComponent = (LayoutComponent)component; 
        encodeResources(context, layoutComponent);
        encodeStartBody(context, layoutComponent);     
        ComponentUtils.renderPassThroughAttributes(context, component);
    }

    
    
    @Override
    public void encodeChildren(FacesContext context, UIComponent component) throws IOException 
    {           
        extractComponent(component);
        LayoutComponent layoutComponent = (LayoutComponent)component; 
        ResponseWriter writer = context.getResponseWriter();   
        
        if (this.menu!=null && "vertical".equals(layoutComponent.getOrientation()))
        {
            this.menu.encodeAll(context);
        }
                
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "content-page", "");
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "content", "");
        
        if (this.navbar!=null)
        {
            this.navbar.encodeAll(context);
        }           
        if (this.menu!=null && "horizontal".equals(layoutComponent.getOrientation()))
        {
            this.menu.encodeAll(context);
        }       
        if (this.content!=null)
        {
            this.content.encodeAll(context);
        }  
        if (this.footer!=null)
        {
            this.footer.encodeAll(context);
        }
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
        writer.endElement("div");        
        scriptGroup.encodeAll(context);
        writer.endElement("body");        
    }
    
    
    
    /**
     * Cette methode genere la description des ressources à insérer dans le head de la page générée:
     * - scripts
     * - css
     *  
     * @param context
     * @param component
     * 
     * @throws IOException
     */
    private void encodeResources(FacesContext context, LayoutComponent component) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>");

        writer.startElement("link", component);
        writer.writeAttribute("type", CSS_MIME_TYPE, null);
        writer.writeAttribute("rel", STYLESHEET_ATTRIBUTE, null);
        writer.writeURIAttribute("href", context.getExternalContext().getRequestContextPath()+"/javax.faces.resource/css/icons.css.jsf?ln=bootstrap4", null);
        writer.endElement("link");
        writer.write("\n");
        
        writer.startElement("link", component);
        writer.writeAttribute("type", CSS_MIME_TYPE, null);
        writer.writeAttribute("rel", STYLESHEET_ATTRIBUTE, null);
        writer.writeURIAttribute("href", context.getExternalContext().getRequestContextPath()+"/javax.faces.resource/css/app.css.jsf?ln=bootstrap4", null);
        writer.endElement("link");
        writer.write("\n");

        writer.startElement("link", component);
        writer.writeAttribute("type", CSS_MIME_TYPE, null);
        writer.writeAttribute("rel", STYLESHEET_ATTRIBUTE, null);
        writer.writeURIAttribute("href", context.getExternalContext().getRequestContextPath()+"/javax.faces.resource/css/dataTables.bootstrap4.css.jsf?ln=vendor", null);
        writer.endElement("link");
        writer.write("\n");

        writer.startElement("link", component);
        writer.writeAttribute("type", CSS_MIME_TYPE, null);
        writer.writeAttribute("rel", STYLESHEET_ATTRIBUTE, null);
        writer.writeURIAttribute("href", context.getExternalContext().getRequestContextPath()+"/javax.faces.resource/css/responsive.bootstrap4.css.jsf?ln=vendor", null);
        writer.endElement("link");
        writer.write("\n");

        writer.startElement("link", component);
        writer.writeAttribute("type", CSS_MIME_TYPE, null);
        writer.writeAttribute("rel", STYLESHEET_ATTRIBUTE, null);
        writer.writeURIAttribute("href", context.getExternalContext().getRequestContextPath()+"/javax.faces.resource/css/buttons.bootstrap4.css.jsf?ln=vendor", null);
        writer.endElement("link");
        writer.write("\n");

        writer.startElement("link", component);
        writer.writeAttribute("type", CSS_MIME_TYPE, null);
        writer.writeAttribute("rel", STYLESHEET_ATTRIBUTE, null);
        writer.writeURIAttribute("href", context.getExternalContext().getRequestContextPath()+"/javax.faces.resource/css/select.bootstrap4.css.jsf?ln=vendor", null);
        writer.endElement("link");
        writer.write("\n");
    }
    
    
    
    /**
     * Cette methode genere la description de la balise bodt de la page générée
     *  
     * @param context
     * @param component
     * 
     * @throws IOException
     */
    private void encodeStartBody(FacesContext context, LayoutComponent component) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();     
        writer.startElement("body", component);
        
        //define the layout orientation
        switch (component.getOrientation())
        {
            case "vertical":
                writer.writeAttribute("data-keep-enlarged", "true", "");
                if (component.isBoxed())
                {
                    writer.writeAttribute(CLASS_ATTRIBUTE, "enlarged boxed-layout", "");
                }
                else
                {
                    writer.writeAttribute(CLASS_ATTRIBUTE, "enlarged", "");            
                }
                break;
            case "horizontal":
                writer.writeAttribute("data-layout", "topnav", "");
                if (component.isBoxed())
                {
                    writer.writeAttribute(CLASS_ATTRIBUTE, "boxed-layout", "");
                }
                break;
            default:
                break;
        }
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "wrapper", CLASS_ATTRIBUTE);
    }
    
        
    
    /**
     * Cette methode extrait les composants déclarés
     * 
     * @param thisComponent
     */
    private void extractComponent(UIComponent component)
    {
        for (UIComponent child : component.getChildren())
        {
            if (child instanceof MenuComponent)
            {
                this.menu = (MenuComponent) child;
            }
            if (child instanceof NavbarComponent)
            {
                this.navbar = (NavbarComponent) child;
            }
            if (child instanceof FooterComponent)
            {
                this.footer = (FooterComponent) child;
            }
            if (child instanceof ContentComponent)
            {
                this.content = (ContentComponent) child;
            }
            if (child instanceof ScriptGroupComponent)
            {
                this.scriptGroup = (ScriptGroupComponent) child;
            }
        }
        if (this.scriptGroup==null)
        {
            this.scriptGroup = new ScriptGroupComponent();
        }
    }
}