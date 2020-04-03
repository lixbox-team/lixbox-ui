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
package fr.lixbox.ui.faces.renderkit;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.List;
import java.util.Map;

import javax.faces.FacesException;
import javax.faces.component.UIComponent;
import javax.faces.component.UIForm;
import javax.faces.component.UIInput;
import javax.faces.component.behavior.ClientBehavior;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;

import com.sun.faces.renderkit.html_basic.HtmlBasicRenderer;

import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.util.ComponentUtils;

public class CoreRenderer extends HtmlBasicRenderer 
{
    // ----------- Attribut(s) -----------
	private static final String REQUIRED_CLASS = " required";
	
	

    // ----------- Methode(s) -----------
	protected void renderId(FacesContext context, UIComponent component) 
        throws IOException
	{	    
        ResponseWriter writer = context.getResponseWriter();
        if (StringUtil.isNotEmpty(component.getClientId()))
        {
            writer.writeAttribute("id", component.getClientId(), "id");
        }    
	}
	
	
	
    protected void renderPassThruAttributes(FacesContext context, UIComponent component, String[] attrs)
		throws IOException 
	{
		ResponseWriter writer = context.getResponseWriter();
		if (attrs != null && attrs.length > 0) 
		{
			for (String attribute : attrs) 
			{
				Object value = component.getAttributes().get(attribute);
				writer.writeAttribute(attribute, value.toString(), attribute);
			}
		}
	}

	

	protected void generateErrorAndRequiredClass(UIInput input, ResponseWriter rw, String... additionalClass) 
        throws IOException 
	{
		StringBuilder sbf = new StringBuilder(getErrorAndRequiredClass(input));
		for (String styleClass : additionalClass)
		{
		    sbf.append(styleClass);
		}
		rw.writeAttribute("class", sbf.toString(), "class");
	}



	public String getErrorAndRequiredClass(UIInput input) 
	{
	    StringBuilder styleClass=new StringBuilder();
		if (input.isRequired()) 
		{
			styleClass.append(REQUIRED_CLASS);
		} 
		else 
		{
			Annotation[] readAnnotations = ComponentUtils.readAnnotations(input);
			if (null != readAnnotations && readAnnotations.length > 0) 
			{
			    
				for (Annotation a : readAnnotations) 
				{
					if ((a.annotationType().getName().endsWith("NotNull"))
							|| (a.annotationType().getName().endsWith("NotEmpty"))
							|| (a.annotationType().getName().endsWith("NotBlank"))) 
					{
					    styleClass.append(REQUIRED_CLASS);
						break;
					}
				}
			}
		}
		return styleClass.toString();
	}
	

	
	public boolean componentIsDisabledOrReadonly(UIComponent component) 
	{
		return Boolean.valueOf(String.valueOf(component.getAttributes().get("disabled"))) || 
		        Boolean.valueOf(String.valueOf(component.getAttributes().get("readonly")));
	}

	
	
	protected String escapeClientId(String clientId) 
	{
		if (clientId == null) 
		{
			return null;
		}
		return clientId.replace(':', '_');
	}

		
	
	protected static UIForm getSurroundingForm(UIComponent component, boolean lenient) 
	{
	    if (component==null)
	    {
	        return null;
	    }
		UIComponent c = component;
		while ((c != null) && (!(c instanceof UIForm)))
		{
			c = c.getParent();
		}
		if (c == null ) 
		{
			if (lenient) 
			{
				return null;
			} 
			else 
			{
				throw new FacesException("The component with the id " + component.getClientId() + " must be inside a form");
			}
		}
		return (UIForm) c;
	}
	
	
	
	protected static Map<String, List<ClientBehavior>> getNonOnClickBehaviors(UIComponent component) 
    {
        return getPassThruBehaviors(component, "click", "action");
    }
}