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
import fr.lixbox.ui.faces.component.grid.ColComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu des colonnes de gridLayout
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.grid", rendererType = "lixbox.component.grid.bootstrap.ColComponent")
public class ColRenderer extends CoreRenderer
{    
    // ----------- Methode(s) -----------  
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof ColComponent))
        {
            throw new NullPointerException();
        }
        
        ColComponent component = (ColComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder();
        
        //mode auto
        if (component.getExtraSmall()==0 && component.getExtraSmallOffset()==0 && component.getSmall()==0 &&
            component.getSmallOffset()==0 && component.getMedium()==0 && component.getMediumOffset()==0 && 
            component.getLarge()==0 && component.getLargeOffset()==0 && component.getExtraLarge()==0 && 
            component.getExtraLargeOffset()==0)
        {
            sbf.append("col ");
        }

        sbf.append(component.getExtraSmall()>0?" col-"+component.getExtraSmall():"");
        sbf.append(component.getExtraSmallOffset()>0?" offset-"+component.getExtraSmallOffset():"");
        
        sbf.append(component.getSmall()>0?" col-sm-"+component.getSmall():"");
        sbf.append(component.getSmallOffset()>0?" offset-sm-"+component.getSmallOffset():"");
        
        sbf.append(component.getMedium()>0?" col-md-"+component.getMedium():"");
        sbf.append(component.getMediumOffset()>0?" offset-md-"+component.getMediumOffset():"");
        
        sbf.append(component.getLarge()>0?" col-lg-"+component.getLarge():"");
        sbf.append(component.getLargeOffset()>0?" offset-lg-"+component.getLargeOffset():"");
        
        sbf.append(component.getExtraLarge()>0?" col-xl-"+component.getExtraLarge():"");
        sbf.append(component.getExtraLargeOffset()>0?" offset-xl-"+component.getExtraLargeOffset():"");
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(" ");
            sbf.append(component.getStyleClass());
        }
        writer.writeAttribute("class", sbf.toString(), "");  
        renderId(context, component);
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