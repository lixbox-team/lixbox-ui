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
package fr.lixbox.ui.faces.renderkit.bootstrap.widget;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.widget.GrowComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

/**
 * Ce renderer affiche un grow au format bootstrap
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.widget", rendererType = "lixbox.component.widget.bootstrap.GrowComponent")
public class GrowRenderer extends CoreRenderer
{    
    // ----------- Methode(s) ----------- 
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof GrowComponent))
        {
            throw new NullPointerException();
        }
    }
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent uicomponent) throws IOException
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof GrowComponent))
        {
            throw new NullPointerException();
        }
        GrowComponent component = (GrowComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();             
        writer.startElement("script", component);
        if (StringUtil.isNotEmpty(component.getRefer_event()))
        {
            writer.write("window.addEventListener('load', function() {$(\"#"+component.getRefer_id()+"\").on(\"");
            writer.write(component.getRefer_event()+"\",function(i) {$.NotificationApp.send(");
            writer.write("\""+component.getTitle()+"\",\""+component.getDescription()+"\",\"");
            writer.write(component.getPosition()+"\", \"rgba(0,0,0,0.2)\",\""+component.getLevel()+"\")})}, false);");
        }
        else
        {
            writer.write("window.addEventListener('load', function() {$.NotificationApp.send(");
            writer.write("\""+component.getTitle()+"\",\""+component.getDescription()+"\",\"");
            writer.write(component.getPosition()+"\", \"rgba(0,0,0,0.2)\",\""+component.getLevel()+"\")}, false);");
        }
        writer.endElement("script");        
    }
}