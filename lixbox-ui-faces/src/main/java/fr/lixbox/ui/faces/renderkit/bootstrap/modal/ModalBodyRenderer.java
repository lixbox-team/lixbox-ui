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
package fr.lixbox.ui.faces.renderkit.bootstrap.modal;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.modal.ModalBodyComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu du body des modals.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.modal", rendererType = "lixbox.component.modal.bootstrap.ModalBodyComponent")
public class ModalBodyRenderer extends CoreRenderer
{  
    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof ModalBodyComponent))
        {
            throw new NullPointerException();
        }
        ModalBodyComponent component = (ModalBodyComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder();
        sbf.append("modal-body ");
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(component.getStyleClass());
            sbf.append(" ");
        }
        writer.writeAttribute("class", sbf.toString(), "");
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
    }
}