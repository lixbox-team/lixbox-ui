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
import fr.lixbox.ui.faces.component.widget.AlertComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

/**
 * Ce renderer affiche une alert au format bootstrap
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.widget", rendererType = "lixbox.component.widget.bootstrap.AlertComponent")
public class AlertRenderer extends CoreRenderer
{    
    // ----------- Methode(s) -----------  
    @Override
    public void encodeBegin(FacesContext context, UIComponent component) throws IOException 
    {
        if ((context == null) || (component == null) || !(component instanceof AlertComponent))
        {
            throw new NullPointerException();
        }
        AlertComponent alertComponent = (AlertComponent) component;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder(getStyle(alertComponent.getLevel(), alertComponent.getStyleClass(), alertComponent.isHardAlert()));
        if (alertComponent.isDismissible())
        {
            sbf.append(" alert-dismissible ");
        }
        writer.writeAttribute("class", sbf.toString()," ");
        if (alertComponent.isDismissible())
        {
            writer.startElement("button", component);
            writer.writeAttribute("type","button"," ");
            writer.writeAttribute("class","close"," ");
            writer.writeAttribute("data-dismiss","alert"," ");
            writer.writeAttribute("aria-label","close"," ");
            writer.write("<span aria-hidden=\"true\">×</span> ");
            writer.endElement("button ");
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
        writer.endElement("div ");
    }
    
    
    
    private String getStyle(String level, String styleSup, boolean hardAlert)
    {
        StringBuilder sbf = new StringBuilder();
        switch(level)
        {
            case "primary":
                sbf.append("alert alert-primary ");
                if (hardAlert)
                {
                    sbf.append("bg-primary text-white border-0 ");
                }
                break;
            case "secondary":
                sbf.append("alert alert-secondary ");
                if (hardAlert)
                {
                    sbf.append("bg-secondary text-white border-0 ");
                }
                break;
            case "success":
                sbf.append("alert alert-success ");
                if (hardAlert)
                {
                    sbf.append("bg-success text-white border-0 ");
                }
                break;
            case "danger":
                sbf.append("alert alert-danger ");
                if (hardAlert)
                {
                    sbf.append("bg-danger text-white border-0 ");
                }
                break;
            case "warning":
                sbf.append("alert alert-warning ");
                if (hardAlert)
                {
                    sbf.append("bg-warning text-white border-0 ");
                }
                break;
            case "info":
                sbf.append("alert alert-info ");
                if (hardAlert)
                {
                    sbf.append("bg-info text-white border-0 ");
                }
                break;
            case "light":
                sbf.append("alert alert-light ");
                if (hardAlert)
                {
                    sbf.append("bg-light text-white border-0 ");
                }
                break;
            case "dark":
                sbf.append("alert alert-dark ");
                if (hardAlert)
                {
                    sbf.append("bg-dark text-white border-0 ");
                }
                break;
            case "outline-primary":
                sbf.append("alert alert-primary bg-white text-primary ");
                break;
            case "outline-secondary":
                sbf.append("alert alert-secondary bg-white text-secondary ");
                break;
            case "outline-success":
                sbf.append("alert alert-success bg-white text-success ");
                break;
            case "outline-danger":
                sbf.append("alert alert-danger bg-white text-danger ");
                break;
            case "outline-warning":
                sbf.append("alert alert-warning bg-white text-warning ");
                break;
            case "outline-info":
                sbf.append("alert alert-info bg-white text-info ");
                break;
            case "outline-light":
                sbf.append("alert alert-light bg-white text-muted ");
                break;
            case "outline-dark":
                sbf.append("alert alert-dark bg-white text-dark ");
                break;                
            default:
                sbf.append("alert alert-info bg-white text-info ");
                break;
        }
        sbf.append(StringUtil.isNotEmpty(styleSup)?" "+styleSup:" ");
        return sbf.toString();
    }
}