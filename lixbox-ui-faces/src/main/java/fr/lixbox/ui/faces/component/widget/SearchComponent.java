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
package fr.lixbox.ui.faces.component.widget;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

import javax.el.MethodExpression;
import javax.el.ValueExpression;
import javax.faces.component.ActionSource;
import javax.faces.component.ActionSource2;
import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponent;
import javax.faces.component.UIInput;
import javax.faces.component.behavior.ClientBehaviorHolder;
import javax.faces.context.FacesContext;
import javax.faces.el.MethodBinding;
import javax.faces.event.ActionEvent;
import javax.faces.event.ActionListener;
import javax.faces.event.FacesEvent;
import javax.faces.event.ListenerFor;
import javax.faces.event.PhaseId;
import javax.faces.event.PostAddToViewEvent;

import com.sun.faces.application.MethodBindingMethodExpressionAdapter;
import com.sun.faces.application.MethodExpressionMethodBindingAdapter;

import fr.lixbox.ui.faces.component.LixboxComponent;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce composant assure l'affichage du widget search
 * 
 * @author ludovic.terral
 */
@SuppressWarnings("deprecation")
@ListenerFor(systemEventClass = PostAddToViewEvent.class)
@ListenerFor(systemEventClass=javax.faces.event.ComponentSystemEvent.class)
@FacesComponent("lixbox.component.widget.SearchComponent")
public class SearchComponent extends UIInput implements LixboxComponent, ClientBehaviorHolder, ActionSource2
{    
    // ----------- Attribut(s) -----------    
    private static final Collection<String> EVENT_NAMES = Collections.unmodifiableCollection(Arrays.asList("blur","valueChange","change","click","action","dblclick","focus","keydown","keypress","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","select"));
    
    private enum PropertyKeys {
    	globalStyle,
    	styleClass,
    	label,
    	placeholder,
        autocompleteListener,

        immediate,
        methodBindingActionListener,
        actionExpression,
        localValueSet,
    }
    
    

    // ----------- Methode(s) -----------  
    public SearchComponent() 
    {
        super();   
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent)this.getParent()).getGlobalStyle());
        }  
        
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType("lixbox.component.widget.bootstrap.SearchComponent");
                break;
            default:
                setRendererType("lixbox.component.widget.bootstrap.SearchComponent");
                break;
        }
    }
    


    @Override
    public Collection<String> getEventNames()
    {
        return EVENT_NAMES;
    }
    
    

    @Override
    public String getDefaultEventName()
    {
        return "action";
    }



    @Override
    public void setValueExpression(String name, ValueExpression binding)
    {
        name = ComponentUtils.snakeCaseToCamelCase(name);
        super.setValueExpression(name, binding);
    }



    @Override
    public void broadcast(FacesEvent event)
    {
        super.broadcast(event);
        if (event instanceof ActionEvent)
        {
            FacesContext context = getFacesContext();
            MethodBinding mb = getActionListener();
            if (mb != null)
            {
                mb.invoke(context, new Object[] { event });
            }
            ActionListener listener = context.getApplication().getActionListener();
            if (listener != null)
            {
                listener.processAction((ActionEvent) event);
            }
        }
    }

    
    
    @Override
    public String getFamily()
    {
        return "lixbox.component.widget";
    } 
    
    
    
    @Override 
    public boolean getRendersChildren() 
    { 
     return true; 
    }   
   


    @Override
    public String getGlobalStyle()
    {
        return (String) getStateHelper().eval(PropertyKeys.globalStyle, "bootstrap");
    }
    @Override
    public void setGlobalStyle(String globalStyle)
    {
    	getStateHelper().put(PropertyKeys.globalStyle, globalStyle);
    }



    public String getStyleClass()
    {
        return (String) getStateHelper().eval(PropertyKeys.styleClass);
    }
    public void setStyleClass(String styleClass)
    {
    	getStateHelper().put(PropertyKeys.styleClass, styleClass);
    }



    public String getLabel()
    {
        return (String) getStateHelper().eval(PropertyKeys.label);
    }
    public void setLabel(String label)
    {
    	getStateHelper().put(PropertyKeys.label, label);
    }



    public String getPlaceholder()
    {
        return (String) getStateHelper().eval(PropertyKeys.placeholder);
    }
    public void setPlaceholder(String placeholder)
    {
    	getStateHelper().put(PropertyKeys.placeholder, placeholder);
    }



    public MethodExpression getAutocompleteListener()
    {
        return (javax.el.MethodExpression) getStateHelper().eval(PropertyKeys.autocompleteListener, null);
    }
    public void setAutocompleteListener(MethodExpression searchListener)
    {
        getStateHelper().put(PropertyKeys.autocompleteListener, searchListener);
    }



    // ---------------------------------------------------- ActionSource /
    @Override
    public MethodBinding getAction()
    {
        MethodBinding result = null;
        MethodExpression me;
        if (null != (me = getActionExpression()))
        {
            if (me.getClass().equals(MethodExpressionMethodBindingAdapter.class))
            {
                result = ((MethodExpressionMethodBindingAdapter) me).getWrapped();
            }
            else
            {
                result = new MethodBindingMethodExpressionAdapter(me);
            }
        }
        return result;
    }
    @Override
    public void setAction(MethodBinding action)
    {
        MethodExpressionMethodBindingAdapter adapter;
        if (null != action)
        {
            adapter = new MethodExpressionMethodBindingAdapter(action);
            setActionExpression(adapter);
        }
        else
        {
            setActionExpression(null);
        }
    }



    @Override
    public MethodBinding getActionListener()
    {
        return (MethodBinding) getStateHelper().get(PropertyKeys.methodBindingActionListener);
    }
    @Override
    public void setActionListener(MethodBinding actionListener)
    {
        getStateHelper().put(PropertyKeys.methodBindingActionListener, actionListener);
    }



    @Override
    public boolean isImmediate()
    {
        return (Boolean) getStateHelper().eval(PropertyKeys.immediate, false);
    }
    @Override
    public void setImmediate(boolean immediate)
    {
        getStateHelper().put(PropertyKeys.immediate, immediate);
    }



    @Override  
    public MethodExpression getActionExpression()
    {
        return (MethodExpression) getStateHelper().get(PropertyKeys.actionExpression);
    }
    @Override
    public void setActionExpression(MethodExpression actionExpression)
    {
        getStateHelper().put(PropertyKeys.actionExpression, actionExpression);
    }



    @Override
    public void addActionListener(ActionListener listener)
    {
        addFacesListener(listener);
    }



    @Override
    public ActionListener[] getActionListeners()
    {
        ActionListener[] al = (ActionListener[]) getFacesListeners(ActionListener.class);
        return (al);
    }



    @Override
    public void removeActionListener(ActionListener listener)
    {
        removeFacesListener(listener);
    }



    @Override
    public void queueEvent(FacesEvent e)
    {
        UIComponent c = e.getComponent();
        if (e instanceof ActionEvent && c instanceof ActionSource)
        {
            if (((ActionSource) c).isImmediate())
            {
                e.setPhaseId(PhaseId.APPLY_REQUEST_VALUES);
            }
            else
            {
                e.setPhaseId(PhaseId.INVOKE_APPLICATION);
            }
        }
        super.queueEvent(e);
    }
}