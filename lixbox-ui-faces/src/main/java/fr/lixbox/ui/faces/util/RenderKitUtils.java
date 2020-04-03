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
package fr.lixbox.ui.faces.util;

import java.io.IOException;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.logging.Logger;

import javax.faces.component.ActionSource;
import javax.faces.component.ActionSource2;
import javax.faces.component.NamingContainer;
import javax.faces.component.UIComponent;
import javax.faces.component.UIForm;
import javax.faces.component.UIOutput;
import javax.faces.component.UIViewRoot;
import javax.faces.component.behavior.ClientBehavior;
import javax.faces.component.behavior.ClientBehaviorContext;
import javax.faces.component.behavior.ClientBehaviorHint;
import javax.faces.component.behavior.ClientBehaviorHolder;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.RenderKit;

import com.sun.faces.config.WebConfiguration;
import com.sun.faces.config.WebConfiguration.BooleanWebContextInitParameter;
import com.sun.faces.util.FacesLogger;
import com.sun.faces.util.RequestStateManager;
import com.sun.faces.util.Util;

import fr.lixbox.common.util.CollectionUtil;

/**
 * <p>
 * A set of utilities for use in {@link RenderKit}s.
 * </p>
 */
public class RenderKitUtils
{
    // ----------- Attribut(s) -----------
    protected static final Logger LOGGER = FacesLogger.RENDERKIT.getLogger();
    private static final String CLICK_ATTRIBUTE = "click";
    private static final String ACTION_ATTRIBUTE = "action";
    private static final String LIBRARY_ATTRIBUTE = "library";

    private enum HandlerType
    {
        USER_HANDLER_ONLY, SINGLE_BEHAVIOR_ONLY, SUBMIT_ONLY, CHAIN
    }



    // ----------- Methode(s) -----------
    private RenderKitUtils()
    {
    }



    /**
     * @param context
     *            the <code>FacesContext</code> for the current request
     *
     * @return <code>true</code> If the <code>add/remove</code> javascript has
     *         been rendered, otherwise <code>false</code>
     */
    public static boolean hasScriptBeenRendered(FacesContext context)
    {
        return RequestStateManager.containsKey(context, RequestStateManager.SCRIPT_STATE);
    }



    /**
     * <p>
     * Set a flag to indicate that the <code>add/remove</code> javascript has
     * been rendered for the current form.
     *
     * @param context
     *            the <code>FacesContext</code> of the current request
     */
    public static void setScriptAsRendered(FacesContext context)
    {
        RequestStateManager.set(context, RequestStateManager.SCRIPT_STATE, Boolean.TRUE);
    }



    /**
     * <p>
     * Renders the Javascript necessary to add and remove request parameters to
     * the current form.
     * </p>
     * 
     * @param context
     *            the <code>FacesContext</code> for the current request
     * @throws java.io.IOException
     *             if an error occurs writing to the response
     */
    public static void renderJsfJs(FacesContext context) throws IOException
    {
        if (hasScriptBeenRendered(context))
        {
            // Already included, return
            return;
        }
        final String name = "jsf.js";
        final String library = "javax.faces";
        if (hasResourceBeenInstalled(context, name, library))
        {
            setScriptAsRendered(context);
            return;
        }
        // Since we've now determined that it's not in the page, we need to add
        // it.
        UIOutput output = new UIOutput();
        output.setRendererType("javax.faces.resource.Script");
        output.getAttributes().put("name", name);
        output.getAttributes().put(LIBRARY_ATTRIBUTE, library);
        output.encodeAll(context);
        // Set the context to record script as included
        setScriptAsRendered(context);
    }



    // Renders the onclick handler for command buttons. Handles
    // chaining together the user-provided onclick handler, any
    // Behavior scripts, plus the default button submit script.
    public static void renderOnclick(FacesContext context, UIComponent component,
            Collection<ClientBehaviorContext.Parameter> params, String submitTarget,
            boolean needsSubmit, boolean needsConfirm) throws IOException
    {
        final String handlerName = "onclick";
        final Object userHandler = component.getAttributes().get(handlerName);
        String behaviorEventName = ACTION_ATTRIBUTE;
        if (component instanceof ClientBehaviorHolder)
        {
            Map<String, List<ClientBehavior>> behaviors = ((ClientBehaviorHolder) component)
                    .getClientBehaviors();
            if (null != behaviors && behaviors.containsKey(CLICK_ATTRIBUTE))
            {
                behaviorEventName = CLICK_ATTRIBUTE;
            }
        }
        renderHandler(context, component, params, handlerName, userHandler, behaviorEventName,
                submitTarget, needsSubmit, needsConfirm, false);
    }



    public static boolean hasResourceBeenInstalled(FacesContext ctx, String name, String library)
    {
        UIViewRoot viewRoot = ctx.getViewRoot();
        ListIterator<UIComponent> iter = (viewRoot.getComponentResources(ctx, "head"))
                .listIterator();
        while (iter.hasNext())
        {
            UIComponent resource = iter.next();
            String rname = (String) resource.getAttributes().get("name");
            String rlibrary = (String) resource.getAttributes().get(LIBRARY_ATTRIBUTE);
            if (name.equals(rname) && library.equals(rlibrary))
            {
                // Set the context to record script as included
                return true;
            }
        }
        iter = (viewRoot.getComponentResources(ctx, "body")).listIterator();
        while (iter.hasNext())
        {
            UIComponent resource = iter.next();
            String rname = (String) resource.getAttributes().get("name");
            String rlibrary = (String) resource.getAttributes().get(LIBRARY_ATTRIBUTE);
            if (name.equals(rname) && library.equals(rlibrary))
            {
                // Set the context to record script as included
                return true;
            }
        }
        iter = (viewRoot.getComponentResources(ctx, "form")).listIterator();
        while (iter.hasNext())
        {
            UIComponent resource = iter.next();
            String rname = (String) resource.getAttributes().get("name");
            String rlibrary = (String) resource.getAttributes().get(LIBRARY_ATTRIBUTE);
            if (name.equals(rname) && library.equals(rlibrary))
            {
                // Set the context to record script as included
                return true;
            }
        }
        return false;
    }



    // Check the request parameters to see whether an action event has
    // been triggered either via jsf.ajax.request() or via a submitting
    // behavior.
    public static boolean isPartialOrBehaviorAction(FacesContext context, String clientId)
    {
        if ((clientId == null) || (clientId.length() == 0))
        {
            return false;
        }
        ExternalContext external = context.getExternalContext();
        Map<String, String> params = external.getRequestParameterMap();
        String source = params.get("javax.faces.source");
        if (!clientId.equals(source))
        {
            return false;
        }
        // First check for a Behavior action event.
        String behaviorEvent = params.get("javax.faces.behavior.event");
        if (null != behaviorEvent)
        {
            return (ACTION_ATTRIBUTE.equals(behaviorEvent));
        }
        // Not a Behavior-related request. Check for jsf.ajax.request()
        // request params.
        String partialEvent = params.get("javax.faces.partial.event");
        return (CLICK_ATTRIBUTE.equals(partialEvent));
    }



    // Returns the Behaviors for the specified component/event name,
    // or null if no Behaviors are available
    private static List<ClientBehavior> getClientBehaviors(UIComponent component,
            String behaviorEventName)
    {
        if (component instanceof ClientBehaviorHolder)
        {
            ClientBehaviorHolder bHolder = (ClientBehaviorHolder) component;
            Map<String, List<ClientBehavior>> behaviors = bHolder.getClientBehaviors();
            if (null != behaviors)
            {
                List<ClientBehavior> clientBehaviors = behaviors.get(behaviorEventName);
                return CollectionUtil.isEmpty(clientBehaviors)?Collections.emptyList():clientBehaviors;
            }
        }
        return Collections.emptyList();
    }



    // Determines the type of handler to render based on what sorts of
    // scripts we need to render/chain.
    private static HandlerType getHandlerType(List<ClientBehavior> behaviors,
            Collection<ClientBehaviorContext.Parameter> params, String userHandler,
            boolean needsSubmit, boolean includeExec)
    {
        if ((behaviors == null) || (behaviors.isEmpty()))
        {
            // No behaviors and no params means user handler only,
            // if we have a param only because of includeExec while having
            // no behaviors, also, user handler only
            if ((params.isEmpty() && !needsSubmit) || includeExec)
                return HandlerType.USER_HANDLER_ONLY;
            // We've got params. If we've also got a user handler, we need
            // to chain. Otherwise, we only render the submit script.
            return (userHandler == null) ? HandlerType.SUBMIT_ONLY : HandlerType.CHAIN;
        }
        // We've got behaviors. See if we can optimize for the single
        // behavior case. We can only do this if we don't have a user
        // handler.
        if ((behaviors.size() == 1) && (userHandler == null))
        {
            ClientBehavior behavior = behaviors.get(0);
            // If we've got a submitting behavior, then it will handle
            // submitting the params. If not, then we need to use
            // a submit script to handle the params.
            if (isSubmitting(behavior) || ((params.isEmpty()) && !needsSubmit))
                return HandlerType.SINGLE_BEHAVIOR_ONLY;
        }
        return HandlerType.CHAIN;
    }



    /**
     * Renders a handler script, which may require chaining together the
     * user-specified event handler, any scripts required by attached Behaviors,
     * and also possibly the mojarra.jsfcljs() "submit" script.
     * 
     * @param context
     *            the FacesContext for this request.
     * @param component
     *            the UIComponent that we are rendering
     * @param params
     *            any parameters that should be included by "submitting"
     *            scripts.
     * @param handlerName
     *            the name of the handler attribute to render (eg. "onclick" or
     *            "ommouseover")
     * @param handlerValue
     *            the user-specified value for the handler attribute
     * @param behaviorEventName
     *            the name of the behavior event that corresponds to this
     *            handler (eg. "action" or "mouseover").
     * @param needsSubmit
     *            indicates whether the mojarra.jsfcljs() "submit" script is
     *            required by the component. Most components do not need this,
     *            either because they submit themselves (eg. commandButton), or
     *            because they do not perform submits (eg. non-command
     *            components). This flag is mainly here for the commandLink
     *            case, where we need to render the submit script to make the
     *            link submit.
     */
    private static void renderHandler(FacesContext context, UIComponent component,
            Collection<ClientBehaviorContext.Parameter> params, String handlerName,
            Object handlerValue, String behaviorEventName, String submitTarget, boolean needsSubmit, boolean needsConfirm,
            boolean includeExec) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        String userHandler = getNonEmptyUserHandler(handlerValue);
        List<ClientBehavior> behaviors = getClientBehaviors(component, behaviorEventName);
        // Don't render behavior scripts if component is disabled
        if (CollectionUtil.isNotEmpty(behaviors) && Util.componentIsDisabled(component))
        {
            behaviors = null;
        }
        if (params == null)
        {
            params = Collections.emptyList();
        }
        String handler = null;
        switch (getHandlerType(behaviors, params, userHandler, needsSubmit, includeExec))
        {
            case USER_HANDLER_ONLY:
                handler = userHandler;
                break;
            case SINGLE_BEHAVIOR_ONLY:
                handler = getSingleBehaviorHandler(context, component, behaviors.get(0), params,
                        behaviorEventName, submitTarget, needsSubmit);
                break;
            case SUBMIT_ONLY:
                handler = getSubmitHandler(context, component, params, submitTarget, true);
                break;
            case CHAIN:
                handler = getChainedHandler(context, component, behaviors, params,
                        behaviorEventName, userHandler, submitTarget, needsSubmit);
                break;
            default:
                assert (false);
        }
        if (needsConfirm)
        {
            StringBuilder onclick = new StringBuilder("r=confirm('"+component.getAttributes().get("confirmLabel")+"'); if (r==true){");
            onclick.append(handler);
            onclick.append("}");
            handler = onclick.toString();
        }
        writer.writeAttribute(handlerName, handler, null);        
    }



    /**
     * <p>
     * Utility method to return the client ID of the parent form.
     * </p>
     *
     * @param component
     *            typically a command component
     *
     * @return the parent form, if any
     */
    public static UIForm getForm(UIComponent component)
    {
        UIComponent parent = component.getParent();
        while (parent != null)
        {
            if (parent instanceof UIForm)
            {
                break;
            }
            parent = parent.getParent();
        }
        UIForm form = (UIForm) parent;
        if (form != null)
        {
            return form;
        }
        return null;
    }



    /**
     * <p>
     * Utility method to return the client ID of the parent form.
     * </p>
     *
     * @param component
     *            typically a command component
     * @param context
     *            the <code>FacesContext</code> for the current request
     *
     * @return the client ID of the parent form, if any
     */
    public static String getFormClientId(UIComponent component, FacesContext context)
    {
        UIForm form = getForm(component);
        if (form != null)
        {
            return form.getClientId(context);
        }
        return null;
    }



    // Appends an name/value property pair to a JSON object. Assumes
    // object has already been opened by the caller. The value will
    // be quoted (ie. wrapped in single quotes and escaped appropriately).
    public static void appendProperty(StringBuilder builder, String name, Object value)
    {
        appendProperty(builder, name, value, true);
    }



    // Appends an name/value property pair to a JSON object. Assumes
    // object has already been opened by the caller.
    public static void appendProperty(StringBuilder builder, String name, Object value,
            boolean quoteValue)
    {
        if ((null == name) || (name.length() == 0)) throw new IllegalArgumentException();
        char lastChar = builder.charAt(builder.length() - 1);
        if ((lastChar != ',') && (lastChar != '{')) builder.append(',');
        appendQuotedValue(builder, name);
        builder.append(":");
        if (value == null)
        {
            builder.append("''");
        }
        else if (quoteValue)
        {
            appendQuotedValue(builder, value.toString());
        }
        else
        {
            builder.append(value.toString());
        }
    }



    // Append a script to the chain, escaping any single quotes, since
    // our script content is itself nested within single quotes.
    private static void appendQuotedValue(StringBuilder builder, String script)
    {
        builder.append("'");
        int length = script.length();
        for (int i = 0; i < length; i++)
        {
            char c = script.charAt(i);
            if (c == '\'' || c == '\\')
            {
                builder.append('\\');
            }
            builder.append(c);
        }
        builder.append("'");
    }



    // Returns a submit handler - ie. a script that calls
    // mojara.jsfcljs()
    private static String getSubmitHandler(FacesContext context, UIComponent component,
            Collection<ClientBehaviorContext.Parameter> params, String submitTarget,
            boolean preventDefault)
    {
        StringBuilder builder = new StringBuilder(256);
        String formClientId = getFormClientId(component, context);
        String componentClientId = component.getClientId(context);
        builder.append("mojarra.jsfcljs(document.getElementById('");
        builder.append(formClientId);
        builder.append("'),{");
        appendProperty(builder, componentClientId, componentClientId);
        if ((null != params) && (!params.isEmpty()))
        {
            String namingContainerId = "";
            WebConfiguration webConfig = WebConfiguration.getInstance();
            boolean namespaceParameters = webConfig
                    .isOptionEnabled(BooleanWebContextInitParameter.NamespaceParameters);
            if (namespaceParameters)
            {
                UIViewRoot viewRoot = context.getViewRoot();
                if (viewRoot instanceof NamingContainer)
                {
                    namingContainerId = viewRoot.getContainerClientId(context);
                }
            }
            for (ClientBehaviorContext.Parameter param : params)
            {
                appendProperty(builder, namingContainerId + param.getName(), param.getValue());
            }
        }
        builder.append("},'");
        if (submitTarget != null)
        {
            builder.append(submitTarget);
        }
        builder.append("')");
        if (preventDefault)
        {
            builder.append(";return false");
        }
        return builder.toString();
    }



    // Appends a script to a jsf.util.chain() call
    private static void appendScriptToChain(StringBuilder builder, String script)
    {
        if ((script == null) || (script.length() == 0))
        {
            return;
        }
        if (builder.length() == 0)
        {
            builder.append("jsf.util.chain(this,event,");
        }
        if (builder.charAt(builder.length() - 1) != ',') builder.append(',');
        appendQuotedValue(builder, script);
    }



    // Appends one or more behavior scripts a jsf.util.chain() call
    private static boolean appendBehaviorsToChain(StringBuilder builder, FacesContext context,
            UIComponent component, List<ClientBehavior> behaviors, String behaviorEventName,
            Collection<ClientBehaviorContext.Parameter> params)
    {
        if ((behaviors == null) || (behaviors.isEmpty()))
        {
            return false;
        }
        ClientBehaviorContext bContext = createClientBehaviorContext(context, component,
                behaviorEventName, params);
        boolean submitting = false;
        for (ClientBehavior behavior : behaviors)
        {
            String script = behavior.getScript(bContext);
            if ((script != null) && (script.length() > 0))
            {
                appendScriptToChain(builder, script);
                if (isSubmitting(behavior))
                {
                    submitting = true;
                }
            }
        }
        return submitting;
    }



    // Chains together a number of Behavior scripts with a user handler
    // script.
    private static String getChainedHandler(FacesContext context, UIComponent component,
            List<ClientBehavior> behaviors, Collection<ClientBehaviorContext.Parameter> params,
            String behaviorEventName, String userHandler, String submitTarget, boolean needsSubmit)
    {
        // Hard to pre-compute builder initial capacity
        StringBuilder builder = new StringBuilder(100);
        appendScriptToChain(builder, userHandler);
        boolean submitting = appendBehaviorsToChain(builder, context, component, behaviors,
                behaviorEventName, params);
        boolean hasParams = ((null != params) && !params.isEmpty());
        // If we've got parameters but we didn't render a "submitting"
        // behavior script, we need to explicitly render a submit script.
        if (!submitting && (hasParams || needsSubmit))
        {
            String submitHandler = getSubmitHandler(context, component, params, submitTarget,
                    false);
            appendScriptToChain(builder, submitHandler);
            // We are now submitting since we've rendered a submit script.
            submitting = true;
        }
        if (builder.length() == 0)
        {
            return null;
        }
        builder.append(")");
        // If we're submitting (either via a behavior, or by rendering
        // a submit script), we need to return false to prevent the
        // default button/link action.
        if (submitting && (ACTION_ATTRIBUTE.equals(behaviorEventName) || CLICK_ATTRIBUTE.equals(behaviorEventName)))
        {
            builder.append(";return false");
        }
        return builder.toString();
    }



    // Returns the script for a single Behavior
    private static String getSingleBehaviorHandler(FacesContext context, UIComponent component,
            ClientBehavior behavior, Collection<ClientBehaviorContext.Parameter> params,
            String behaviorEventName, String submitTarget, boolean needsSubmit)
    {
        ClientBehaviorContext bContext = createClientBehaviorContext(context, component,
                behaviorEventName, params);
        String script = behavior.getScript(bContext);
        boolean preventDefault = ((needsSubmit || isSubmitting(behavior))
                && (component instanceof ActionSource || component instanceof ActionSource2));
        if (script == null)
        {
            if (needsSubmit)
            {
                script = getSubmitHandler(context, component, params, submitTarget, preventDefault);
            }
        }
        else if (preventDefault)
        {
            script = script + ";return false";
        }
        return script;
    }



    // Creates a ClientBehaviorContext with the specified properties.
    private static ClientBehaviorContext createClientBehaviorContext(FacesContext context,
            UIComponent component, String behaviorEventName,
            Collection<ClientBehaviorContext.Parameter> params)
    {
        return ClientBehaviorContext.createClientBehaviorContext(context, component,
                behaviorEventName, null, params);
    }



    private static String getNonEmptyUserHandler(Object handlerObject)
    {
        String handler = null;
        if (null != handlerObject)
        {
            handler = handlerObject.toString();
            handler = handler.trim();
            if (handler.length() == 0) handler = null;
        }
        return handler;
    }



    // Tests whether the specified behavior is submitting
    private static boolean isSubmitting(ClientBehavior behavior)
    {
        return behavior.getHints().contains(ClientBehaviorHint.SUBMITTING);
    }
}