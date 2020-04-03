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
package fr.lixbox.ui.faces.renderkit.bootstrap.card;

import java.io.IOException;
import java.util.Optional;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.component.card.CardBodyComponent;
import fr.lixbox.ui.faces.component.card.CardComponent;
import fr.lixbox.ui.faces.component.card.CardHeaderComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce renderer assure le rendu des cards.
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.card", rendererType = "lixbox.component.card.bootstrap.CardComponent")
public class CardRenderer extends CoreRenderer
{  
    private static final String CLASS_ATTRIBUTE = "class";



    // ----------- Methode(s) -----------    
    @Override
    public void encodeBegin(FacesContext context, UIComponent uicomponent) throws IOException 
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof CardComponent))
        {
            throw new NullPointerException();
        }
        CardComponent component = (CardComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", component);
        StringBuilder sbf = new StringBuilder("card ");        
        if (StringUtil.isNotEmpty(component.getStyleClass()))
        {
            sbf.append(component.getStyleClass());
            sbf.append(" ");
        }
        writer.writeAttribute(CLASS_ATTRIBUTE, sbf.toString(), "");
        renderId(context, component);
        if (component.isClosible()||component.isCollapsible()||component.isRefreshible())
        {              
            Optional<CardHeaderComponent> headerComponent = component.getChildren().stream().filter(child -> child instanceof CardHeaderComponent).map(CardHeaderComponent.class::cast).findFirst();
            CardHeaderComponent header = null;
            if (headerComponent.isPresent())
            {
                header = headerComponent.get();
                component.getChildren().remove(header);
            }
            else
            {
                header = new CardHeaderComponent();                
                Optional<CardBodyComponent> bodyComponent = component.getChildren().stream().filter(child -> child instanceof CardBodyComponent).map(CardBodyComponent.class::cast).findFirst();
                if (bodyComponent.isPresent())
                {
                    bodyComponent.get().getAttributes().put("withControls", true);
                    if (StringUtil.isNotEmpty(bodyComponent.get().getTitle()))
                    {
                        header.getAttributes().put("title", bodyComponent.get().getTitle());
                    }
                    if (StringUtil.isNotEmpty(bodyComponent.get().getSubtitle()))
                    {
                        header.getAttributes().put("subtitle", bodyComponent.get().getSubtitle());                        
                    }
                }
            }
            header.getAttributes().put("withControls", true);
            component.getCardControlWidget().getAttributes().put("aria-controls", component.getClientId()+"-child");
            header.getAttributes().put("control", component.getCardControlWidget());
            header.encodeAll(context);
            writer.startElement("div", component);
            writer.writeAttribute("id", component.getClientId()+"-child", "");
            if (component.isCollapsed())
            {
                writer.writeAttribute(CLASS_ATTRIBUTE, "collapse", "");
            }
            else
            {
                writer.writeAttribute(CLASS_ATTRIBUTE, "collapse show", "");
            } 
        }
        ComponentUtils.renderPassThroughAttributes(context, uicomponent);
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent uicomponent) throws IOException
    {
        if ((context == null) || (uicomponent == null) || !(uicomponent instanceof CardComponent))
        {
            throw new NullPointerException();
        }
        CardComponent component = (CardComponent) uicomponent;
        ResponseWriter writer = context.getResponseWriter();             
        writer.endElement("div");

        if (component.isClosible()||component.isCollapsible()||component.isRefreshible())
        {
            writer.endElement("div");
        }
    }
}