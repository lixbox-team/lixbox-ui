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
import java.util.Map;

import javax.el.ValueExpression;
import javax.faces.application.Application;
import javax.faces.component.UIComponent;
import javax.faces.component.UIInput;
import javax.faces.component.UINamingContainer;
import javax.faces.component.ValueHolder;
import javax.faces.component.html.HtmlCommandButton;
import javax.faces.component.html.HtmlForm;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.convert.Converter;
import javax.faces.convert.ConverterException;
import javax.faces.event.ActionEvent;
import javax.faces.render.FacesRenderer;

import com.sun.faces.renderkit.RenderKitUtils;
import com.sun.faces.util.MessageFactory;
import com.sun.faces.util.MessageUtils;
import com.sun.faces.util.RequestStateManager;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.widget.SearchComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

/**
 * Ce renderer affiche un searchform au format bootstrap
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.widget", rendererType = "lixbox.component.widget.bootstrap.SearchComponent")
public class SearchRenderer extends CoreRenderer
{    
    private static final String VALUE_ATTRIBUTE = "value";
    // ----------- Attribut(s) ----------- 
    private HtmlForm form;
    private boolean hasStringConverter = false;
    private boolean hasStringConverterSet = false;
    
    
    // ----------- Methode(s) ----------- 
    @Override
    public void decode(FacesContext context, UIComponent uicomponent) 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof SearchComponent))
        {
            throw new NullPointerException();
        }
        SearchComponent search = (SearchComponent) uicomponent;   

        Map<String, String> params = context.getExternalContext().getRequestParameterMap();
        String clientId = decodeBehaviors(context, uicomponent);
        String clientId2 = search.getClientId(context);
        char sep = UINamingContainer.getSeparatorChar(context);
        String query = params.get(clientId2 + sep + "query");
        search.getValueExpression(VALUE_ATTRIBUTE).setValue(context.getELContext(), query);        
        if (wasClicked(context, uicomponent, clientId) && StringUtil.isNotEmpty(query))
        {
            uicomponent.queueEvent(new ActionEvent(uicomponent));
        }
    }


    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof SearchComponent))
        {
            throw new NullPointerException();
        }
        SearchComponent search = (SearchComponent) uicomponent;     
        ResponseWriter rw = context.getResponseWriter();
        form = new HtmlForm();
        form.setId(search.getId());
        form.encodeBegin(context);
        rw.write("<div class=\"input-group\">");
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent uicomponent) throws IOException
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof SearchComponent))
        {
            throw new NullPointerException();
        }
        ResponseWriter writer = context.getResponseWriter();
        String clientId = uicomponent.getClientId(context);
        char sep = UINamingContainer.getSeparatorChar(context);
        encodeInputField(context, clientId + sep + "query", uicomponent);
        encodeSubmitButton(context, uicomponent);
        writer.endElement("div");
        form.encodeEnd(context);
    }
    


    @Override
    public Object getConvertedValue(FacesContext context, UIComponent component,
            Object submittedValue)
    {
        String newValue = (String) submittedValue;
        ValueExpression valueExpression = component.getValueExpression(VALUE_ATTRIBUTE);
        Converter<?> converter = null;
        if (component instanceof ValueHolder)
        {
            converter = ((ValueHolder) component).getConverter();
        }
        if (null == converter && null != valueExpression)
        {
            Class<?> converterType = valueExpression.getType(context.getELContext());
            if (converterType == null || converterType == Object.class)
            {
                return newValue;
            }
            if (converterType == String.class && !hasStringConverter(context))
            {
                return newValue;
            }
            try
            {
                Application application = context.getApplication();
                converter = application.createConverter(converterType);
            }
            catch (Exception e)
            {
                return (null);
            }
        }
        else if (converter == null)
        {
            return newValue;
        }
        if (converter != null)
        {
            RequestStateManager.set(context, RequestStateManager.TARGET_COMPONENT_ATTRIBUTE_NAME, component);
            return converter.getAsObject(context, component, newValue);
        }
        else
        {
            Object[] params = { newValue, "null Converter" };
            throw new ConverterException(MessageFactory.getMessage(context, MessageUtils.CONVERSION_ERROR_MESSAGE_ID, params));
        }
    }



    @Override
    public void setSubmittedValue(UIComponent component, Object value) 
    {
        if (component instanceof UIInput) 
        {
            ((UIInput) component).setSubmittedValue(value);
        }
    }
    
    

    private void encodeInputField(FacesContext context, String clientId, UIComponent uicomponent) throws IOException 
    {
        SearchComponent searchCompo = (SearchComponent)uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        
        writer.startElement("input", uicomponent);
        writer.writeAttribute("type", "text", null);
        writer.writeAttribute("name", clientId, null);
        writer.writeAttribute("id", clientId, null);
        Object value = searchCompo.getValue();
        if (value != null) 
        {
            writer.writeAttribute(VALUE_ATTRIBUTE, value.toString(), VALUE_ATTRIBUTE);
        }
        writer.writeAttribute("class", "form-control", "");
        writer.writeAttribute("placeholder", searchCompo.getPlaceholder(), "");        
        writer.endElement("input");
        
        writer.write("<span class=\"mdi mdi-magnify\"></span>");        
    }
    
    

    private void encodeSubmitButton(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        ResponseWriter writer = context.getResponseWriter();
        SearchComponent searchCompo = (SearchComponent)uicomponent;
        writer.startElement("div", uicomponent);
        writer.writeAttribute("class", "input-group-append", null);
        HtmlCommandButton command = new HtmlCommandButton();
        command.setActionExpression(searchCompo.getActionExpression());
        command.setStyleClass("btn btn-primary");
        command.setValue(searchCompo.getLabel());
        command.encodeAll(context);        
        writer.endElement("div");
    }
 
    
    
    private boolean wasClicked(FacesContext context, UIComponent component, String clientId)
    {
        if (clientId == null)
        {
            clientId = component.getClientId(context);
        }
        Map<String, String> requestParameterMap = context.getExternalContext().getRequestParameterMap();
        if (requestParameterMap.get(clientId) == null)
        {
            if (RenderKitUtils.isPartialOrBehaviorAction(context, clientId))
            {
                return true;
            }
            StringBuilder builder = new StringBuilder(clientId);
            String xValue = builder.append(".x").toString();
            builder.setLength(clientId.length());
            String yValue = builder.append(".y").toString();
            return (requestParameterMap.get(xValue) != null && requestParameterMap.get(yValue) != null);
        }
        return true;
    }
    
    
    
    private boolean hasStringConverter(FacesContext context) 
    {
        if (!hasStringConverterSet)
        {
            hasStringConverter = (null != context.getApplication().createConverter(String.class));
            hasStringConverterSet = true;
        }
        return hasStringConverter;
    }
}