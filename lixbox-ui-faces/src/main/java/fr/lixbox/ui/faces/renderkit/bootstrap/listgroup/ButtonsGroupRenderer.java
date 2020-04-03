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
package fr.lixbox.ui.faces.renderkit.bootstrap.listgroup;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.listgroup.ButtonsGroupComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

/**
 * Ce renderer assure le rendu des ButtonsGroupComponent.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.listgroup", rendererType = "lixbox.component.listgroup.bootstrap.ButtonsGroupComponent")
public class ButtonsGroupRenderer extends CoreRenderer
{  
    // ----------- Methode(s) -----------
    @Override
    public void encodeBegin(FacesContext context, UIComponent component) throws IOException 
    {
        ButtonsGroupComponent uicomponent = (ButtonsGroupComponent) component;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", uicomponent);
        StringBuilder sbf = new StringBuilder("btn-group");  
        switch(uicomponent.getOrientation())
        {
            case vertical:
                sbf.append("-vertical");
                break;
            default:
                break;
        }
        if (StringUtil.isNotEmpty(uicomponent.getStyleClass()))
        {
            sbf.append(" ");
            sbf.append(uicomponent.getStyleClass());
        }
        writer.writeAttribute("class", sbf.toString(), "");
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent component) throws IOException 
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.endElement("div");
    }
}