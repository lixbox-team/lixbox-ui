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
package fr.lixbox.ui.faces.renderkit.bootstrap.graphic;

import java.io.IOException;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.graphic.ChartComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

@FacesRenderer(componentFamily = "lixbox.component.graphic", rendererType = "lixbox.component.graphic.bootstrap.ChartComponent")
public class ChartRenderer extends CoreRenderer
{    
    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof ChartComponent))
        {
            throw new NullPointerException();
        }
        ChartComponent component = (ChartComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder("chartjs-chart ");        
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(component.getStyleClass());
            sbf.append(" ");
        }
        writer.writeAttribute("class", sbf.toString(), "");
        writer.writeAttribute("style", "max-height: "+component.getMax_height(), "");  
        writer.startElement("canvas", component);
        writer.writeAttribute("id", uicomponent.getId()+"-chart", null);
        writer.endElement("canvas");
        writer.endElement("div");
    }
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent uicomponent) throws IOException
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof ChartComponent))
        {
            throw new NullPointerException();
        }
        ChartComponent component = (ChartComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        StringBuilder sbf = new StringBuilder();  
        
        sbf.append("window.addEventListener(\"load\", ");
        sbf.append("        function(){ ");
        sbf.append("            if ($(\"#"+uicomponent.getId()+"-chart"+"\").length > 0)  ");
        sbf.append("            { ");
        sbf.append("                alert('add event listener'); ");
        sbf.append("                var ctx = document.getElementById('"+uicomponent.getId()+"-chart"+"').getContext('2d'); ");
        sbf.append("                var chart = new Chart(ctx, { ");
        sbf.append("                    type: \""+component.getType()+"\", ");
        sbf.append("                    data: { ");
        sbf.append("                            labels : [ \"pipo\", \"papi\", \"pipu\", \"pupy\" ], ");
        sbf.append("                            datasets : [ { ");
        sbf.append("                                data : [ 305, 115, 80, 114 ], ");
        sbf.append("                                backgroundColor : [ \"#727cf5\", \"#fa5c7c\", \"#0acf97\", \"#ebeff2\" ], ");
        sbf.append("                                borderColor : \"transparent\", ");
        sbf.append("                                borderWidth : \"3\" ");
        sbf.append("                            } ] ");
        sbf.append("                    }, ");
        sbf.append("                    options: { ");
        sbf.append("                            maintainAspectRatio : !1, ");
        sbf.append("                            cutoutPercentage : 60, ");
        sbf.append("                            legend : { display : !1 } ");
        sbf.append("                    } ");
        sbf.append("                }); ");
        sbf.append("            } ");
        sbf.append("        } ");
        sbf.append("    ); ");
        writer.append(sbf.toString());
    }
}