/*******************************************************************************
 *    
'- *                           FRAMEWORK Lixbox
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
package fr.lixbox.ui.faces.util;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.EnumSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.el.ELContext;
import javax.el.ExpressionFactory;
import javax.el.MethodExpression;
import javax.el.PropertyNotFoundException;
import javax.el.ValueExpression;
import javax.el.ValueReference;
import javax.faces.application.ConfigurableNavigationHandler;
import javax.faces.application.NavigationCase;
import javax.faces.application.ResourceHandler;
import javax.faces.component.NamingContainer;
import javax.faces.component.UIComponent;
import javax.faces.component.UIForm;
import javax.faces.component.UIParameter;
import javax.faces.component.UniqueIdVendor;
import javax.faces.component.visit.VisitHint;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.view.facelets.FaceletContext;

import fr.lixbox.common.util.CollectionUtil;
import fr.lixbox.common.util.StringUtil;

/**
 * Cette utilitaire fournit des methodes pour travailler sur JSF
 * 
 * @author ludovic.terral
 */
public class ComponentUtils
{
    // ----------- Attribut(s) -----------
    public static final String SKIP_ITERATION_HINT = "javax.faces.visit.SKIP_ITERATION";
    
    protected static final EnumSet<VisitHint> VISIT_HINTS_SKIP_UNRENDERED = EnumSet.of(VisitHint.SKIP_UNRENDERED);
    
    private static final Pattern pattern = Pattern.compile("^#\\{(.+)\\}$");
    private static final String INVALID_LOCALE_FORMAT = "Invalid locale format: ";



    // ----------- Methode(s) -----------
    private ComponentUtils() 
    {
        //util class
    }
    
    
    
    public static String findComponentClientId(String id)
    {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        UIComponent component = findComponent(facesContext.getViewRoot(), id);
        return component!=null?component.getClientId(facesContext):"";
    }



    private static UIComponent findComponent(UIComponent base, String id)
    {
        if (id.equals(base.getId())) return base;
        UIComponent kid = null;
        UIComponent result = null;
        Iterator<UIComponent> kids = base.getFacetsAndChildren();
        while (kids.hasNext())
        {
            kid = kids.next();
            if (id.equals(kid.getId()))
            {
                result = kid;
                break;
            }
            result = findComponent(kid, id);
            if (result != null)
            {
                break;
            }
        }
        return result;
    }



    public static UIComponent findParentForm(UIComponent component)
    {
        UIComponent parent = component.getParent();
        while (parent != null)
        {
            if (parent instanceof UIForm)
            {
                return parent;
            }
            parent = parent.getParent();
        }
        return null;
    }



    public static UniqueIdVendor findParentUniqueIdVendor(UIComponent component)
    {
        UIComponent parent = component.getParent();
        while (parent != null)
        {
            if (parent instanceof UniqueIdVendor)
            {
                return (UniqueIdVendor) parent;
            }
            parent = parent.getParent();
        }
        return null;
    }



    public static UIComponent findParentNamingContainer(UIComponent component)
    {
        UIComponent parent = component.getParent();
        while (parent != null)
        {
            if (parent instanceof NamingContainer)
            {
                return parent;
            }
            parent = parent.getParent();
        }
        return null;
    }



    public static String escapeJQueryId(String id)
    {
        return "#" + id.replaceAll(":", "\\\\\\\\:");
    }



    /**
     * Implementation from Apache Commons Lang
     */
    public static Locale toLocale(String str)
    {
        if (str == null)
        {
            return null;
        }
        int len = str.length();
        if (len != 2 && len != 5 && len < 7)
        {
            throw new IllegalArgumentException(INVALID_LOCALE_FORMAT + str);
        }
        char ch0 = str.charAt(0);
        char ch1 = str.charAt(1);
        if (ch0 < 'a' || ch0 > 'z' || ch1 < 'a' || ch1 > 'z')
        {
            throw new IllegalArgumentException(INVALID_LOCALE_FORMAT + str);
        }
        if (len == 2)
        {
            return new Locale(str, "");
        }
        else
        {
            if (str.charAt(2) != '_')
            {
                throw new IllegalArgumentException(INVALID_LOCALE_FORMAT + str);
            }
            char ch3 = str.charAt(3);
            if (ch3 == '_')
            {
                return new Locale(str.substring(0, 2), "", str.substring(4));
            }
            char ch4 = str.charAt(4);
            if (ch3 < 'A' || ch3 > 'Z' || ch4 < 'A' || ch4 > 'Z')
            {
                throw new IllegalArgumentException(INVALID_LOCALE_FORMAT + str);
            }
            if (len == 5)
            {
                return new Locale(str.substring(0, 2), str.substring(3, 5));
            }
            else
            {
                if (str.charAt(5) != '_')
                {
                    throw new IllegalArgumentException(INVALID_LOCALE_FORMAT + str);
                }
                return new Locale(str.substring(0, 2), str.substring(3, 5), str.substring(6));
            }
        }
    }



    public static boolean isValueBlank(String value)
    {
        return StringUtil.isEmpty(value);
    }



    public static void processDecodesOfFacetsAndChilds(UIComponent component, FacesContext context)
    {
        if (component.getFacetCount() > 0)
        {
            for (UIComponent facet : component.getFacets().values())
            {
                facet.processDecodes(context);
            }
        }
        if (component.getChildCount() > 0)
        {
            for (int i = 0, childCount = component.getChildCount(); i < childCount; i++)
            {
                UIComponent child = component.getChildren().get(i);
                child.processDecodes(context);
            }
        }
    }



    public static void processValidatorsOfFacetsAndChilds(UIComponent component,
            FacesContext context)
    {
        if (component.getFacetCount() > 0)
        {
            for (UIComponent facet : component.getFacets().values())
            {
                facet.processValidators(context);
            }
        }
        if (component.getChildCount() > 0)
        {
            for (int i = 0, childCount = component.getChildCount(); i < childCount; i++)
            {
                UIComponent child = component.getChildren().get(i);
                child.processValidators(context);
            }
        }
    }



    public static void processUpdatesOfFacetsAndChilds(UIComponent component, FacesContext context)
    {
        if (component.getFacetCount() > 0)
        {
            for (UIComponent facet : component.getFacets().values())
            {
                facet.processUpdates(context);
            }
        }
        if (component.getChildCount() > 0)
        {
            for (int i = 0, childCount = component.getChildCount(); i < childCount; i++)
            {
                UIComponent child = component.getChildren().get(i);
                child.processUpdates(context);
            }
        }
    }



    public static NavigationCase findNavigationCase(FacesContext context, String outcome)
    {
        ConfigurableNavigationHandler navHandler = (ConfigurableNavigationHandler) context
                .getApplication().getNavigationHandler();
        String outcomeValue = (outcome == null) ? context.getViewRoot().getViewId() : outcome;
        return navHandler.getNavigationCase(context, null, outcomeValue);
    }



    public static Map<String, List<String>> getUIParams(UIComponent component)
    {
        List<UIComponent> children = component.getChildren();
        Map<String, List<String>> params = null;
        if (CollectionUtil.isNotEmpty(children))
        {
            params = new LinkedHashMap<>();
            for (UIComponent child : children)
            {
                if (child.isRendered() && (child instanceof UIParameter))
                {
                    UIParameter uiParam = (UIParameter) child;
                    if (!uiParam.isDisable())
                    {
                        List<String> paramValues = params.get(uiParam.getName());
                        if (paramValues == null)
                        {
                            paramValues = new ArrayList<>();
                            params.put(uiParam.getName(), paramValues);
                        }
                        paramValues.add(String.valueOf(uiParam.getValue()));
                    }
                }
            }
        }
        return params;
    }



    public static String getResourceURL(FacesContext context, String value)
    {
        if (isValueBlank(value))
        {
            return "";
        }
        else if (value.contains(ResourceHandler.RESOURCE_IDENTIFIER))
        {
            return value;
        }
        else
        {
            String url = context.getApplication().getViewHandler().getResourceURL(context, value);
            return context.getExternalContext().encodeResourceURL(url);
        }
    }



    public static String getLitteralExpression(UIComponent component, String attribute)
    {
        try
        {
            if (null != component && null != attribute && !attribute.isEmpty())
            {
                String expression = component.getValueExpression(attribute).getExpressionString();
                Matcher matcher = pattern.matcher(expression);
                if (matcher.find())
                    return matcher.group(1);
                else return expression;
            }
            else return null;
        }
        catch (Exception e)
        {
            return null;
        }
    }
    
    

    public static void renderPassThroughAttributes(FacesContext context, UIComponent component) throws IOException 
    {
        ResponseWriter writer = context.getResponseWriter();
        Map<String, Object> passthroughAttributes = component.getPassThroughAttributes(false);
        
        if (passthroughAttributes != null && !passthroughAttributes.isEmpty()) {
            for (Map.Entry<String, Object> attribute : passthroughAttributes.entrySet()) {
               
                Object attributeValue = attribute.getValue();
                if (attributeValue != null) {
                    String value = null;
                    
                    if (attributeValue instanceof ValueExpression) {
                        Object expressionValue = ((ValueExpression) attributeValue).getValue(context.getELContext());
                        if (expressionValue != null) {
                            value = expressionValue.toString();
                        }
                    }
                    else {
                        value = attributeValue.toString();
                    }
                    
                    if (value != null) {
                        writer.writeAttribute(attribute.getKey(), value, null);
                    }
                }
            }
        }
    }



    public static String snakeCaseToCamelCase(String snakeCase)
    {
        if (snakeCase.contains("-"))
        {
            StringBuilder camelCaseStr = new StringBuilder(snakeCase.length());
            boolean toUpperCase = false;
            for (char c : snakeCase.toCharArray())
            {
                if (c == '-')
                    toUpperCase = true;
                else
                {
                    if (toUpperCase)
                    {
                        toUpperCase = false;
                        c = Character.toUpperCase(c);
                    }
                    camelCaseStr.append(c);
                }
            }
            snakeCase = camelCaseStr.toString();
        }
        return snakeCase;
    }



    public static String camelCaseToSnakeCase(String camelCase)
    {
        if (null == camelCase || camelCase.length() == 0) return camelCase;
        StringBuilder snakeCase = new StringBuilder(camelCase.length() + 3);
        snakeCase.append(camelCase.charAt(0));
        boolean hasCamelCase = false;
        for (int i = 1; i < camelCase.length(); i++)
        {
            char c = camelCase.charAt(i);
            if (Character.isUpperCase(c))
            {
                snakeCase.append("-");
                c = Character.toLowerCase(c);
                hasCamelCase = true;
            }
            snakeCase.append(c);
        }
        if (!hasCamelCase) return camelCase;
        return snakeCase.toString();
    }



    public static String javaScriptVarName(String clientId)
    {
        return snakeCaseToCamelCase(clientId.replace(":", "-"));
    }



    public static Annotation[] readAnnotations(ValueExpression p_expression)
    {
        FacesContext context = FacesContext.getCurrentInstance();
        ELContext elContext = context.getELContext();
        try
        {
            ValueReference valueReference = p_expression.getValueReference(elContext);
            Object base;
            if (null == valueReference)
            {
                base = evaluteBaseForMojarra(elContext, p_expression);
            }
            else
            {
                base = valueReference.getBase();
            }
            if (null == base)
            {
                return new Annotation[0];
            }
            Field declaredField = getField(base, p_expression.getExpressionString());
            if (null != declaredField)
            {
                return declaredField.getAnnotations();
            }
            Method getter = getGetter(base, p_expression.getExpressionString());
            if (null != getter)
            {
                return getter.getAnnotations();
            }
        }
        catch (PropertyNotFoundException ex)
        {
            // this happens if a bean is null.
        }
        return new Annotation[0];
    }



    @SuppressWarnings("el-syntax")
    private static Object evaluteBaseForMojarra(ELContext elContext, ValueExpression p_expression)
    {
        String exp = p_expression.getExpressionString();
        int endOfBaseName = exp.lastIndexOf('.');
        int mapDelimiterPos = exp.lastIndexOf('[');
        if (mapDelimiterPos >= 0)
        {
            int mapEndDelimiterPos = exp.lastIndexOf(']');
            if (endOfBaseName < mapEndDelimiterPos)
            {
                endOfBaseName = mapDelimiterPos; // treat the [...] as field
            }
        }
        if (endOfBaseName < 0)
        {
            return null;
        }
        String basename = exp.substring(2, endOfBaseName);
        Object result = evalAsObject("#{" + basename + "}");
        if (null != result)
        {
            return result;
        }
        int start = 0;
        int end = basename.indexOf('.', start);
        int end2 = basename.indexOf('[', start);
        if (end2 >= 0 && end2 < end)
        {
            end = end2;
        }
        if (end < 0)
        {
            end = basename.length();
        }
        String variableName = basename.substring(start, end);
        FaceletContext faceletContext = (FaceletContext) FacesContext.getCurrentInstance()
                .getAttributes().get(FaceletContext.FACELET_CONTEXT_KEY);
        Object resolvedBase = faceletContext.getAttribute(variableName);
        if (resolvedBase != null)
        {
            if (endOfBaseName == end + 2)
            {
                result = resolvedBase;
            }
            else
            {
                basename = basename.substring(end + 1, endOfBaseName - 2);
                result = elContext.getELResolver().getValue(elContext, resolvedBase, basename);
            }
        }
        return result;
    }



    public static Annotation[] readAnnotations(UIComponent p_component)
    {
        ValueExpression valueExpression = p_component.getValueExpression("value");
        if (valueExpression != null && valueExpression.getExpressionString() != null
                && valueExpression.getExpressionString().length() > 0)
        {
            return readAnnotations(valueExpression);
        }
        return new Annotation[0];
    }



    @SuppressWarnings("el-syntax")
    private static Field getField(Object container, String p_expression)
    {
        if (container == null)
        {
            return null;
        }
        if (p_expression.startsWith("#{") && p_expression.endsWith("}"))
        {
            int delimiterPos = p_expression.lastIndexOf('.');
            int mapDelimiterPos = p_expression.lastIndexOf('[');
            if (mapDelimiterPos >= 0)
            {
                int mapEndDelimiterPos = p_expression.lastIndexOf(']');
                if (delimiterPos < mapEndDelimiterPos)
                {
                    delimiterPos = mapDelimiterPos; // treat the [...] as field
                }
            }
            if (delimiterPos < 0)
            {
                return null;
            }
            String fieldName = p_expression.substring(delimiterPos + 1, p_expression.length() - 1);
            Class<? extends Object> c = container.getClass();
            while (c != null)
            {
                Field declaredField;
                try
                {
                    declaredField = c.getDeclaredField(fieldName);
                    return declaredField;
                }
                catch (NoSuchFieldException e)
                {
                    c = c.getSuperclass();
                }
                catch (SecurityException e)
                {
                    return null;
                }
            }
        }
        return null;
    }



    @SuppressWarnings("el-syntax")
    private static Method getGetter(Object container, String p_expression)
    {
        if (container == null)
        {
            return null;
        }
        if (p_expression.startsWith("#{") && p_expression.endsWith("}"))
        {
            int delimiterPos = p_expression.lastIndexOf('.');
            int mapDelimiterPos = p_expression.lastIndexOf('[');
            if (mapDelimiterPos >= 0)
            {
                int mapEndDelimiterPos = p_expression.lastIndexOf(']');
                if (delimiterPos < mapEndDelimiterPos)
                {
                    return null;
                }
            }
            if (delimiterPos < 0)
            {
                return null;
            }
            String fieldName = p_expression.substring(delimiterPos + 1, p_expression.length() - 1);
            String getterName = "get" + fieldName.substring(0, 1).toUpperCase()
                    + fieldName.substring(1);
            Method declaredMethod = findMethod(container, getterName);
            String booleanGetterName = "is" + fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);
            if (null == declaredMethod) declaredMethod = findMethod(container, booleanGetterName);
            return declaredMethod;
        }
        return null;
    }



    private static Method findMethod(Object container, String getterName)
    {
        Class<? extends Object> c = container.getClass();
        Method declaredField;
        try
        {
            declaredField = c.getMethod(getterName);
            return declaredField;
        }
        catch (NoSuchMethodException  | SecurityException e)
        {
            // no error
        }
        return null;
    }



    public static Object evalAsObject(String p_expression)
    {
        FacesContext context = FacesContext.getCurrentInstance();
        ExpressionFactory expressionFactory = context.getApplication().getExpressionFactory();
        ELContext elContext = context.getELContext();
        ValueExpression vex = expressionFactory.createValueExpression(elContext, p_expression, Object.class);
        return vex.getValue(elContext);
    }



    public static String evalAsString(String p_expression)
    {
        FacesContext context = FacesContext.getCurrentInstance();
        ExpressionFactory expressionFactory = context.getApplication().getExpressionFactory();
        ELContext elContext = context.getELContext();
        ValueExpression vex = expressionFactory.createValueExpression(elContext, p_expression, String.class);
        return (String) vex.getValue(elContext);
    }
    
    

    public static MethodExpression createMethodExpression(String p_expression, Class<?> returnType,
            Class<?>... parameterTypes)
    {
        FacesContext context = FacesContext.getCurrentInstance();
        ExpressionFactory expressionFactory = context.getApplication().getExpressionFactory();
        ELContext elContext = context.getELContext();
        return expressionFactory.createMethodExpression(elContext, p_expression, returnType, parameterTypes);
    }
}