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
package fr.lixbox.ui.faces.renderkit.bootstrap.input;

import java.io.IOException;
import java.util.Collection;
import java.util.Map;
import java.util.logging.Level;

import javax.faces.component.UIComponent;
import javax.faces.component.behavior.ClientBehaviorContext;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.event.ActionEvent;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.input.CommandButtonComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.RenderKitUtils;

/**
 * Ce renderer assure le rendu des CommandButton.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.input", rendererType = "lixbox.component.input.bootstrap.CommandButtonComponent")
public class CommandButtonRenderer extends CoreRenderer
{  
    // ----------- Attribut(s) -----------    
    private static final String DISABLED_ATTRIBUTE = "disabled";
    private static final String BUTTON_ELEMENT = "button";



    // ----------- Methode(s) -----------    
    @Override
    public void decode(FacesContext context, UIComponent component) {

        rendererParamsNotNull(context, component);

        if (!shouldDecode(component)) {
            return;
        }

        String clientId = decodeBehaviors(context, component);

        if (wasClicked(context, component, clientId) && !isReset(component)) {
            component.queueEvent(new ActionEvent(component));

            if (logger.isLoggable(Level.FINE)) {
                logger.fine("This command resulted in form submission " +
                            " ActionEvent queued.");
                logger.log(Level.FINE,
                           "End decoding component {0}",
                           component.getId());
            }
        }

    }

    

    @Override
    public void encodeBegin(FacesContext context, UIComponent component)
          throws IOException 
    {
        CommandButtonComponent button = (CommandButtonComponent) component;
        rendererParamsNotNull(context, component);
        if (!shouldEncode(component)) 
        {
            return;
        }
        String type = button.getType();
        Collection<ClientBehaviorContext.Parameter> params = getBehaviorParameters(component);
        if ( !params.isEmpty() && ("submit".equals(type) || BUTTON_ELEMENT.equals(type))) 
        {
           RenderKitUtils.renderJsfJs(context);
        }
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent component) throws IOException 
    {
        CommandButtonComponent button = (CommandButtonComponent) component;
        encodeMarkup(context, button);
    }



    protected void encodeMarkup(FacesContext context, CommandButtonComponent button) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        String clientId = button.getClientId(context);
        Object value = button.getValue();
        String icon = button.getIcon();
        String title = button.getTitle();
        writer.startElement(BUTTON_ELEMENT, button);
        writer.writeAttribute("id", clientId, "id");
        writer.writeAttribute("name", clientId, "name");
        
        StringBuilder sbf = new StringBuilder("btn ");
        if (button.isBordered())
        {
            sbf.append("btn-outline-");
        }
        else
        {
            sbf.append("btn-");
        }
        sbf.append(button.getLevel());
        if (button.isRounded())
        {
            sbf.append(" btn-rounded");
        }
        switch(button.getDisplay())
        {
            case block:                
                sbf.append(" btn-block");
                break;
            default:
                break;
        }
        switch(button.getSize())
        {
            case lg:                
                sbf.append(" btn-lg");
                break;
            case sm:                
                sbf.append(" btn-sm");
                break;
            default:
                break;
        }
        if (StringUtil.isNotEmpty(button.getStyleClass()))
        {
            sbf.append(" ");
            sbf.append(button.getStyleClass());
        }
        
        writer.writeAttribute("class", sbf.toString(), "styleClass");
        writer.writeAttribute("type", button.getType(), "type");
        if (button.isDisabled())
        {
            writer.writeAttribute(DISABLED_ATTRIBUTE, DISABLED_ATTRIBUTE, DISABLED_ATTRIBUTE);
        }
        if (StringUtil.isNotEmpty(button.getTitle()))
        {
            writer.writeAttribute("title", button.getTitle(), "title");
        }
        Collection<ClientBehaviorContext.Parameter> params = getBehaviorParameters(button);
        RenderKitUtils.renderOnclick(context, 
                button, 
                params,
                null,
                false,
                StringUtil.isNotEmpty(button.getConfirmLabel()));
        
        // icon
        if (!StringUtil.isEmpty(icon))
        {
            writer.startElement("em", null);
            writer.writeAttribute("class", title!=null||value!=null?"mr-1 "+icon:icon, null);
            writer.endElement("em");
        }
        
        
        // text
        writer.startElement("span", null);
        if (value != null)
        {
            if (button.isEscape())
            {
                writer.writeText(value, "value");
            }
            else
            {
                writer.write(value.toString());
            }
        }
        writer.endElement("span");
        writer.endElement(BUTTON_ELEMENT);
    }
    
    
    
    /**
     * <p>Determine if this component was activated on the client side.</p>
     *
     * @param context the <code>FacesContext</code> for the current request
     * @param component the component of interest
     * @param clientId the client id, if it has been retrieved, otherwise null
     * @return <code>true</code> if this component was in fact activated,
     *  otherwise <code>false</code>
     */
    private static boolean wasClicked(FacesContext context,
                                      UIComponent component,
                                      String clientId) 
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
    
    

    /**
     * @param component the component of interest
     * @return <code>true</code> if the button represents a <code>reset</code>
     *  button, otherwise <code>false</code>
     */
    private static boolean isReset(UIComponent component) 
    {
        return ("reset".equals(component.getAttributes().get("type")));
    }
}