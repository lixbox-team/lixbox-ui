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
package fr.lixbox.ui.faces.renderkit.bootstrap.grid;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.grid.RowComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu des colonnes de gridLayout
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.grid", rendererType = "lixbox.component.grid.bootstrap.RowComponent")
public class RowRenderer extends CoreRenderer
{  
    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof RowComponent))
        {
            throw new NullPointerException();
        }
        if (uicomponent.isRendered())
        {
            RowComponent component = (RowComponent) uicomponent;
            ResponseWriter writer = context.getResponseWriter();
            writer.startElement("div", component);
            StringBuilder sbf = new StringBuilder("row");
            if (!component.isGutter())
            {
                sbf.append(" ");
                sbf.append("no-gutters ");
            }
            if (StringUtil.isNotEmpty(component.getAlign()))
            {
                sbf.append(" ");
                sbf.append(component.getAlign());
            }
            if (StringUtil.isNotEmpty(component.getStyleClass()))
            {
                sbf.append(" ");
                sbf.append(component.getStyleClass());
            }
            writer.writeAttribute("class", sbf.toString(), "");
            renderId(context, component);
            ComponentUtils.renderPassThroughAttributes(context, uicomponent);
        }
    }
    
    @Override
    public void encodeChildren(FacesContext context, UIComponent component) throws IOException 
    {
        if (component.isRendered())
        {
            super.encodeChildren(context, component);
        }
    }
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent component) throws IOException
    {
        if ((context == null) || (component == null))
        {
            throw new NullPointerException();
        }
        if (component.isRendered())
        {
            ResponseWriter writer = context.getResponseWriter();             
            writer.endElement("div");
        }
    }
}