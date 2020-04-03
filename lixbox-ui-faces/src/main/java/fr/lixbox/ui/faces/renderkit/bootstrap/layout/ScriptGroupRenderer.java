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

import fr.lixbox.ui.faces.component.layout.ScriptGroupComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

@FacesRenderer(componentFamily = "lixbox.component.layout", rendererType = "lixbox.component.layout.bootstrap.ScriptGroupComponent")
public class ScriptGroupRenderer extends CoreRenderer
{    
    private static final String SCRIPT_ELEMENT = "script";



    // ----------- Methode(s) -----------   
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {       
        ScriptGroupComponent component = (ScriptGroupComponent)uicomponent; 
        ResponseWriter writer = context.getResponseWriter();             
        writer.startElement(SCRIPT_ELEMENT, component);
        writer.writeAttribute("type", "text/javascript", null);
        writer.writeURIAttribute("src", context.getExternalContext().getRequestContextPath()+"/javax.faces.resource/js/app.min.js.jsf?ln=bootstrap4", null);
        writer.endElement(SCRIPT_ELEMENT);
        
        writer.startElement(SCRIPT_ELEMENT, component);
        writer.writeAttribute("type", "text/javascript", null);
        writer.writeURIAttribute("src", context.getExternalContext().getRequestContextPath()+"/javax.faces.resource/jsf.js.jsf?ln=javax.faces", null);
        writer.endElement(SCRIPT_ELEMENT);
    }    
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent uicomponent) throws IOException 
    { 
        //ne rien faire
    }
}