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
package fr.lixbox.ui.faces.api;

import java.io.IOException;
import java.sql.ResultSet;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.faces.FacesException;
import javax.faces.application.Application;
import javax.faces.component.UIComponent;
import javax.faces.component.UINamingContainer;
import javax.faces.component.UIViewRoot;
import javax.faces.component.UniqueIdVendor;
import javax.faces.component.visit.VisitCallback;
import javax.faces.component.visit.VisitContext;
import javax.faces.component.visit.VisitHint;
import javax.faces.component.visit.VisitResult;
import javax.faces.context.FacesContext;
import javax.faces.event.PhaseId;
import javax.faces.event.PostValidateEvent;
import javax.faces.event.PreRenderComponentEvent;
import javax.faces.event.PreValidateEvent;
import javax.faces.model.ArrayDataModel;
import javax.faces.model.CollectionDataModel;
import javax.faces.model.DataModel;
import javax.faces.model.ListDataModel;
import javax.faces.model.ResultSetDataModel;
import javax.faces.model.ScalarDataModel;
import javax.faces.render.Renderer;

import fr.lixbox.ui.faces.component.table.ColumnComponent;
import fr.lixbox.ui.faces.util.ComponentUtils;

/**
 * Ce composant est la base pour les colonnes et les tables.
 * 
 * @author ludovic.terral
 */
public class UiData extends javax.faces.component.UIData
{    
    // ----------- Attribut(s) -----------
    private String clientId = null;
    private StringBuilder idBuilder = new StringBuilder();
    private DataModel<?> model = null;
    private Object oldVar = null;
    private Boolean isNested = null;

    protected enum PropertyKeys
    {
        rowIndex, rowIndexVar,
    }



    // ----------- Methode(s) -----------
    public java.lang.String getRowIndexVar()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.rowIndexVar, null);
    }
    public void setRowIndexVar(java.lang.String _rowIndexVar)
    {
        getStateHelper().put(PropertyKeys.rowIndexVar, _rowIndexVar);
    }



    @Override
    public void processDecodes(FacesContext context)
    {
        if (!isRendered())
        {
            return;
        }
        pushComponentToEL(context, this);
        processPhase(context, PhaseId.APPLY_REQUEST_VALUES);
        decode(context);
        popComponentFromEL(context);
    }



    @Override
    public void processValidators(FacesContext context)
    {
        if (!isRendered())
        {
            return;
        }
        pushComponentToEL(context, this);
        Application app = context.getApplication();
        app.publishEvent(context, PreValidateEvent.class, this);
        preValidate();
        processPhase(context, PhaseId.PROCESS_VALIDATIONS);
        app.publishEvent(context, PostValidateEvent.class, this);
        popComponentFromEL(context);
    }



    @Override
    public void processUpdates(FacesContext context)
    {
        if (!isRendered())
        {
            return;
        }
        pushComponentToEL(context, this);
        preUpdate();
        processPhase(context, PhaseId.UPDATE_MODEL_VALUES);
        popComponentFromEL(context);
    }



    protected void processPhase(FacesContext context, PhaseId phaseId)
    {
        setRowIndex(-1);
        processFacets(context, phaseId);
        if (requiresColumns())
        {
            processColumnFacets(context, phaseId);
        }
        processChildren(context, phaseId);
        setRowIndex(-1);
    }



    protected void processFacets(FacesContext context, PhaseId phaseId)
    {
        if (this.getFacetCount() > 0)
        {
            for (UIComponent facet : getFacets().values())
            {
                process(context, facet, phaseId);
            }
        }
    }



    protected void processColumnFacets(FacesContext context, PhaseId phaseId)
    {
        for (UIComponent child : this.getChildren())
        {
            if (child.isRendered() && (child.getFacetCount() > 0))
            {
                for (UIComponent facet : child.getFacets().values())
                {
                    process(context, facet, phaseId);
                }
            }
        }
    }



    protected void processChildren(FacesContext context, PhaseId phaseId)
    {
        int first = getFirst();
        int rows = getRows();
        int last = rows == 0 ? getRowCount() : (first + rows);
        for (int rowIndex = first; rowIndex < last; rowIndex++)
        {
            setRowIndex(rowIndex);
            if (!isRowAvailable())
            {
                break;
            }
            for (UIComponent child : this.getIterableChildren())
            {
                if (child.isRendered())
                {
                    if (child instanceof ColumnComponent)
                    {
                        for (UIComponent grandkid : child.getChildren())
                        {
                            process(context, grandkid, phaseId);
                        }
                    }
                    else
                    {
                        process(context, child, phaseId);
                    }
                }
            }
        }
    }



    protected void process(FacesContext context, UIComponent component, PhaseId phaseId)
    {
        if (phaseId == PhaseId.APPLY_REQUEST_VALUES)
        {
            component.processDecodes(context);
        }
        else if (phaseId == PhaseId.PROCESS_VALIDATIONS)
        {
            component.processValidators(context);
        }
        else if (phaseId == PhaseId.UPDATE_MODEL_VALUES)
        {
            component.processUpdates(context);
        }
    }



    @Override
    public String getClientId(FacesContext context)
    {
        if (this.clientId != null)
        {
            return this.clientId;
        }
        String id = getId();
        if (id == null)
        {
            UniqueIdVendor parentUniqueIdVendor = ComponentUtils.findParentUniqueIdVendor(this);
            if (parentUniqueIdVendor == null)
            {
                UIViewRoot viewRoot = context.getViewRoot();
                if (viewRoot != null)
                {
                    id = viewRoot.createUniqueId();
                }
                else
                {
                    throw new FacesException(
                            "Cannot create clientId for " + this.getClass().getCanonicalName());
                }
            }
            else
            {
                id = parentUniqueIdVendor.createUniqueId(context, null);
            }
            this.setId(id);
        }
        UIComponent namingContainer = ComponentUtils.findParentNamingContainer(this);
        if (namingContainer != null)
        {
            String containerClientId = namingContainer.getContainerClientId(context);
            if (containerClientId != null)
            {
                this.clientId = this.idBuilder.append(containerClientId)
                        .append(UINamingContainer.getSeparatorChar(context)).append(id).toString();
                this.idBuilder.setLength(0);
            }
            else
            {
                this.clientId = id;
            }
        }
        else
        {
            this.clientId = id;
        }
        Renderer renderer = getRenderer(context);
        if (renderer != null)
        {
            this.clientId = renderer.convertClientId(context, this.clientId);
        }
        return this.clientId;
    }



    @Override
    public String getContainerClientId(FacesContext context)
    {
        // clientId is without rowIndex
        String componentClientId = this.getClientId(context);
        int rowIndex = getRowIndex();
        if (rowIndex == -1)
        {
            return componentClientId;
        }
        String containerClientId = idBuilder.append(componentClientId)
                .append(UINamingContainer.getSeparatorChar(context)).append(rowIndex).toString();
        idBuilder.setLength(0);
        return containerClientId;
    }



    @Override
    public void setId(String id)
    {
        super.setId(id);
        this.clientId = null;
    }



    @Override
    public void setRowIndex(int rowIndex)
    {
        setRowModel(rowIndex);
    }



    public void setRowModel(int rowIndex)
    {
        // update rowIndex
        getStateHelper().put(PropertyKeys.rowIndex, rowIndex);
        getDataModel().setRowIndex(rowIndex);
        // clear datamodel
        if (rowIndex == -1)
        {
            setDataModel(null);
        }
        // update var
        String var = this.getVar();
        if (var != null)
        {
            String rowIndexVar = this.getRowIndexVar();
            Map<String, Object> requestMap = getFacesContext().getExternalContext().getRequestMap();
            if (rowIndex == -1)
            {
                oldVar = requestMap.remove(var);
                if (rowIndexVar != null) requestMap.remove(rowIndexVar);
            }
            else if (isRowAvailable())
            {
                requestMap.put(var, getRowData());
                if (rowIndexVar != null) requestMap.put(rowIndexVar, rowIndex);
            }
            else
            {
                requestMap.remove(var);
                if (rowIndexVar != null) requestMap.put(rowIndexVar, rowIndex);
                if (oldVar != null)
                {
                    requestMap.put(var, oldVar);
                    oldVar = null;
                }
            }
        }
    }



    @Override
    public int getRowIndex()
    {
        return (Integer) getStateHelper().eval(PropertyKeys.rowIndex, -1);
    }



    @SuppressWarnings({ "rawtypes", "unchecked" })
    @Override
    protected DataModel<?> getDataModel()
    {
        if (this.model != null)
        {
            return (model);
        }
        Object current = getValue();
        if (current == null)
        {
            setDataModel(new ListDataModel(Collections.emptyList()));
        }
        else if (current instanceof DataModel)
        {
            setDataModel((DataModel) current);
        }
        else if (current instanceof List)
        {
            setDataModel(new ListDataModel((List) current));
        }
        else if (Object[].class.isAssignableFrom(current.getClass()))
        {
            setDataModel(new ArrayDataModel((Object[]) current));
        }
        else if (current instanceof ResultSet)
        {
            setDataModel(new ResultSetDataModel((ResultSet) current));
        }
        else if (current instanceof Collection)
        {
            setDataModel(new CollectionDataModel<>((Collection) current));
        }
        else
        {
            setDataModel(new ScalarDataModel(current));
        }
        return model;
    }
    @SuppressWarnings("rawtypes")
    @Override
    protected void setDataModel(DataModel dataModel)
    {
        this.model = dataModel;
    }



    protected boolean shouldVisitChildren(VisitContext context, boolean visitRows)
    {
        if (visitRows)
        {
            setRowIndex(-1);
        }
        Collection<String> idsToVisit = context.getSubtreeIdsToVisit(this);
        return (!idsToVisit.isEmpty());
    }



    @Override
    public boolean visitTree(VisitContext context, VisitCallback callback)
    {
        if (!isVisitable(context))
        {
            return false;
        }
        FacesContext facesContext = context.getFacesContext();
        boolean visitRows = shouldVisitRows(facesContext, context);
        int rowIndex = -1;
        if (visitRows)
        {
            rowIndex = getRowIndex();
            setRowIndex(-1);
        }
        pushComponentToEL(facesContext, null);
        try
        {
            VisitResult result = context.invokeVisitCallback(this, callback);
            if (result == VisitResult.COMPLETE)
            {
                return true;
            }
            if ((result == VisitResult.ACCEPT) && shouldVisitChildren(context, visitRows))
            {
                if (visitFacets(context, callback, visitRows))
                {
                    return true;
                }
                if (requiresColumns() && visitColumnsAndColumnFacets(context, callback, visitRows))
                {
                    return true;
                }
                if (visitRows(context, callback, visitRows))
                {
                    return true;
                }
            }
        }
        finally
        {
            popComponentFromEL(facesContext);
            if (visitRows)
            {
                setRowIndex(rowIndex);
            }
        }
        return false;
    }



    protected boolean visitFacets(VisitContext context, VisitCallback callback, boolean visitRows)
    {
        if (visitRows)
        {
            setRowIndex(-1);
        }
        if (getFacetCount() > 0)
        {
            for (UIComponent facet : getFacets().values())
            {
                if (facet.visitTree(context, callback))
                {
                    return true;
                }
            }
        }
        return false;
    }



    protected boolean visitColumnsAndColumnFacets(VisitContext context, VisitCallback callback,
            boolean visitRows)
    {
        if (visitRows)
        {
            setRowIndex(-1);
        }
        if (getChildCount() > 0)
        {
            for (UIComponent child : getChildren())
            {
                VisitResult result = context.invokeVisitCallback(child, callback);
                if (result == VisitResult.COMPLETE)
                {
                    return true;
                }
                if (child instanceof UIColumn && child.getFacetCount() > 0)
                {
                    if (child instanceof ColumnComponent)
                    {
                        ColumnComponent columns = (ColumnComponent) child;
                        for (int i = 0; i < columns.getRowCount(); i++)
                        {
                            columns.setRowIndex(i);
                            boolean value = visitColumnFacets(context, callback, child);
                            if (value)
                            {
                                return true;
                            }
                        }
                        columns.setRowIndex(-1);
                    }
                    else
                    {
                        boolean value = visitColumnFacets(context, callback, child);
                        if (value)
                        {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }



    protected boolean visitColumnFacets(VisitContext context, VisitCallback callback, UIComponent component)
    {
        for (UIComponent columnFacet : component.getFacets().values())
        {
            if (columnFacet.visitTree(context, callback))
            {
                return true;
            }
        }
        return false;
    }



    protected boolean visitRows(VisitContext context, VisitCallback callback, boolean visitRows)
    {
        boolean requiresColumns = this.requiresColumns();
        int processed = 0;
        int rowIndex = 0;
        int rows = 0;
        if (visitRows)
        {
            rowIndex = getFirst() - 1;
            rows = getRows();
        }
        while (true)
        {
            if (visitRows)
            {
                if ((rows > 0) && (++processed > rows))
                {
                    break;
                }
                setRowIndex(++rowIndex);
                if (!isRowAvailable())
                {
                    break;
                }
            }
            if (getChildCount() > 0)
            {
                for (UIComponent kid : getChildren())
                {
                    if (requiresColumns)
                    {
                        if (kid instanceof ColumnComponent)
                        {
                            ColumnComponent uicolumns = (ColumnComponent) kid;
                            for (int i = 0; i < uicolumns.getRowCount(); i++)
                            {
                                uicolumns.setRowIndex(i);
                                boolean value = visitColumnContent(context, callback, uicolumns);
                                if (value)
                                {
                                    uicolumns.setRowIndex(-1);
                                    return true;
                                }
                            }
                            uicolumns.setRowIndex(-1);
                        }
                        else
                        {
                            boolean value = visitColumnContent(context, callback, kid);
                            if (value)
                            {
                                return true;
                            }
                        }
                    }
                    else
                    {
                        if (kid.visitTree(context, callback))
                        {
                            return true;
                        }
                    }
                }
            }
            if (!visitRows)
            {
                break;
            }
        }
        return false;
    }



    protected boolean visitColumnContent(VisitContext context, VisitCallback callback,
            UIComponent component)
    {
        if (component.getChildCount() > 0)
        {
            for (UIComponent grandkid : component.getChildren())
            {
                if (grandkid.visitTree(context, callback))
                {
                    return true;
                }
            }
        }
        return false;
    }



    protected boolean shouldVisitRows(FacesContext context, VisitContext visitContext)
    {
        try
        {
            // JSF 2.1
            VisitHint skipHint = VisitHint.valueOf("SKIP_ITERATION");
            return !visitContext.getHints().contains(skipHint);
        }
        catch (IllegalArgumentException e)
        {
            // JSF 2.0
            Object skipHint = context.getAttributes().get("javax.faces.visit.SKIP_ITERATION");
            return !Boolean.TRUE.equals(skipHint);
        }
    }



    protected boolean requiresColumns()
    {
        return false;
    }



    protected List<UIComponent> getIterableChildren()
    {
        return this.getChildren();
    }



    private Boolean isNestedWithinIterator()
    {
        if (isNested == null)
        {
            UIComponent parent = this;
            while (null != (parent = parent.getParent()))
            {
                if (parent instanceof javax.faces.component.UIData
                        || parent.getClass().getName().endsWith("UIRepeat"))
                {
                    isNested = Boolean.TRUE;
                    break;
                }
            }
            if (isNested == null)
            {
                isNested = Boolean.FALSE;
            }
            return isNested;
        }
        else
        {
            return isNested;
        }
    }



    private void preValidate()
    {
        if (isNestedWithinIterator())
        {
            setDataModel(null);
        }
    }



    private void preUpdate()
    {
        if (isNestedWithinIterator())
        {
            setDataModel(null);
        }
    }



    private void preEncode()
    {
        setDataModel(null);
    }



    @Override
    public void encodeBegin(FacesContext context) throws IOException
    {
        preEncode();
        if (context == null)
        {
            throw new NullPointerException();
        }
        pushComponentToEL(context, null);
        if (!isRendered())
        {
            return;
        }
        context.getApplication().publishEvent(context, PreRenderComponentEvent.class, this);
        String rendererType = getRendererType();
        if (rendererType != null)
        {
            Renderer renderer = this.getRenderer(context);
            if (renderer != null)
            {
                renderer.encodeBegin(context, this);
            }
        }
    }
}