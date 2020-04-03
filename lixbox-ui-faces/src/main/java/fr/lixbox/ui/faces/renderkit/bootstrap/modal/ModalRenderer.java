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
import fr.lixbox.ui.faces.component.modal.ModalComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu des modals.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.modal", rendererType = "lixbox.component.modal.bootstrap.ModalComponent")
public class ModalRenderer extends CoreRenderer
{  
    private static final String CLASS_ATTRIBUTE = "class";



    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof ModalComponent))
        {
            throw new NullPointerException();
        }
        ModalComponent component = (ModalComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder(component.getId());
        sbf.append(" modal fade ");        
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(component.getStyleClass());
            sbf.append(" ");
        }
        writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), "");
        renderId(context, component);        
        ComponentUtils.renderPassThroughAttributes(context, uicomponent);
        writer.startElement("div", component);
        sbf = new StringBuilder("modal-dialog");
        switch(component.getSize())
        {
            case lg:                
                sbf.append(" modal-lg");
                break;
            case sm:                
                sbf.append(" modal-sm");
                break;
            case full:
                sbf.append(" modal-full-width");
                break;
            default:
                break;
        }
        writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), "");
        
        writer.startElement("div", component);
        writer.writeAttribute(CLASS_ATTRIBUTE, "modal-content ", "");
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent uicomponent) throws IOException
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof ModalComponent))
        {
            throw new NullPointerException();
        }
        ResponseWriter writer = context.getResponseWriter();             
        writer.endElement("div");
        writer.endElement("div");
        writer.endElement("div");
    }
}