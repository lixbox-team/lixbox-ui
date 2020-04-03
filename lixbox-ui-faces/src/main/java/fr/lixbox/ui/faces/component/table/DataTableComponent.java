/*******************************************************************************
 *    
 *                           FRAMEWORK Lixbox
 *                          ==================
 *      
 *   Copyright - LIXTEC - Tous droits reserves.
 *   
 *   Le contenu de ce fichier est la propriete de la societe Lixtec.
 *   
 *   Toute utilisation de ce fichier et des informations, sous n'importe quelle
 *   forme necessite un accord ecrit explicite des auteurs
 *   
 *   @AUTHOR Ludovic TERRAL
 *
 ******************************************************************************/
package fr.lixbox.ui.faces.component.table;

import java.io.Serializable;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.el.ELContext;
import javax.el.MethodExpression;
import javax.el.ValueExpression;
import javax.faces.FacesException;
import javax.faces.component.FacesComponent;
import javax.faces.component.UIComponent;
import javax.faces.component.behavior.AjaxBehavior;
import javax.faces.component.behavior.ClientBehaviorHolder;
import javax.faces.context.FacesContext;
import javax.faces.event.AjaxBehaviorEvent;
import javax.faces.event.FacesEvent;
import javax.faces.event.PhaseId;
import javax.faces.model.DataModel;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import fr.lixbox.common.util.CollectionUtil;
import fr.lixbox.ui.faces.Constants;
import fr.lixbox.ui.faces.api.UIColumn;
import fr.lixbox.ui.faces.api.UiData;
import fr.lixbox.ui.faces.component.LixboxComponent;
import fr.lixbox.ui.faces.event.SelectEvent;
import fr.lixbox.ui.faces.event.UnselectEvent;
import fr.lixbox.ui.faces.model.SelectableDataModel;
import fr.lixbox.ui.faces.model.SelectableDataModelWrapper;

@FacesComponent(DataTableComponent.COMPONENT_NAME)
public class DataTableComponent extends UiData implements LixboxComponent, ClientBehaviorHolder 
{
    private static final String SINGLE_KEY = "single";
    // ----------- Attribut(s) -----------
    public static final String DEFAULT_RENDERER = "lixbox.component.table.bootstrap.DataTableComponent";
    public static final String COMPONENT_FAMILY = "lixbox.component.table";
    public static final String COMPONENT_NAME = COMPONENT_FAMILY+".DataTableComponent";

    private static final Log logger = LogFactory.getLog(DataTableComponent.class);    
    private static final Collection<String> EVENT_NAMES = Collections
            .unmodifiableCollection(Arrays.asList("rowSelect", "rowUnselect", "rowDblselect"));
        
    protected enum PropertyKeys
    {
        globalStyle, scrollable, scrollHeight, scrollWidth, selectionMode, selection, rowIndexVar, style, styleClass,
        resizableColumns, sortBy, sortOrder, scrollRows, rowKey, filterEvent, filterDelay,
        draggableColumns, sortMode, frozenRows, disabledSelection, rowSelectMode, 
        frozenColumns, caseSensitiveSort, disabledTextSelection, nullSortOrder, rowHover,        
    }

    private List<Object> selectedRowKeys = new ArrayList<>();
    private List<UIColumn> columns;
    private ValueExpression sortByVE;

    

    // ----------- Methode(s) -----------
	public DataTableComponent() 
    {
        super();
        List<String> events = CollectionUtil.convertAnyListToArrayList(EVENT_NAMES);
        for (int idx=1; idx<events.size(); idx++)
        {
            addClientBehavior(events.get(idx), new AjaxBehavior());
        }
        if (this.getParent() instanceof LixboxComponent)
        {
            this.setGlobalStyle(((LixboxComponent) this.getParent()).getGlobalStyle());
        }
        switch (getGlobalStyle())
        {
            case "bootstrap":
                setRendererType(DEFAULT_RENDERER);
                break;
            default:
                setRendererType(DEFAULT_RENDERER);
                break;
        }
    }



    @Override
    public String getFamily()
    {
        return COMPONENT_FAMILY;
    }



    @Override
    public boolean getRendersChildren()
    {
        return true;
    }



    @Override
    public void processUpdates(FacesContext context)
    {
        super.processUpdates(context);
        ValueExpression selectionVE = this.getValueExpression("selection");
        if (selectionVE != null && this.getLocalSelection()!=null)
        {
            selectionVE.setValue(context.getELContext(), this.getLocalSelection());
            this.setSelection(null);
        }        
    }



    @Override
    public void queueEvent(FacesEvent event)
    {
        FacesContext context = getFacesContext();
        if (isRequestSource(context) && event instanceof AjaxBehaviorEvent)
        {
            setRowIndex(-1);
            Map<String, String> params = context.getExternalContext().getRequestParameterMap();
            String eventName = params.get(Constants.RequestParams.PARTIAL_BEHAVIOR_EVENT_PARAM);
            String clientId = this.getClientId(context);
            FacesEvent wrapperEvent = null;
            AjaxBehaviorEvent behaviorEvent = (AjaxBehaviorEvent) event;
            String rowKey = "";
            switch (eventName)
            {
                case ("rowSelect"):
                case ("rowSelectRadio"):
                case ("rowSelectCheckbox"):
                case ("rowDblselect"):    
                    rowKey = params.get(clientId + "_selection");
                    this.setSelection(this.getRowData(rowKey));
                    wrapperEvent = new SelectEvent(this, behaviorEvent.getBehavior(), this.getRowData(rowKey));
                    break;
                case ("rowUnselect"):
                    rowKey = params.get(clientId + "_selection");
                    this.setSelection(this.getRowData(rowKey));
                    wrapperEvent = new UnselectEvent(this, behaviorEvent.getBehavior(), this.getRowData(rowKey));
                    break;
                default:
                    logger.info("unsupported event");
            }            
            if (wrapperEvent != null)
            {
                wrapperEvent.setPhaseId(event.getPhaseId());
            }
            super.queueEvent(wrapperEvent);
        }
        else
        {
            super.queueEvent(event);
        }
    }



    @Override
    public Collection<String> getEventNames()
    {
        return EVENT_NAMES;
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

    
    

    public boolean isScrollable()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.scrollable, false);
    }
    public void setScrollable(boolean _scrollable)
    {
        getStateHelper().put(PropertyKeys.scrollable, _scrollable);
    }



    public java.lang.String getScrollHeight()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.scrollHeight, null);
    }
    public void setScrollHeight(java.lang.String _scrollHeight)
    {
        getStateHelper().put(PropertyKeys.scrollHeight, _scrollHeight);
    }



    public java.lang.String getScrollWidth()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.scrollWidth, null);
    }
    public void setScrollWidth(java.lang.String _scrollWidth)
    {
        getStateHelper().put(PropertyKeys.scrollWidth, _scrollWidth);
    }



    public java.lang.String getSelectionMode()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.selectionMode, null);
    }
    public void setSelectionMode(java.lang.String _selectionMode)
    {
        getStateHelper().put(PropertyKeys.selectionMode, _selectionMode);
    }



    public java.lang.Object getSelection()
    {
        return getStateHelper().eval(PropertyKeys.selection, null);
    }
    public void setSelection(java.lang.Object _selection)
    {
        getStateHelper().put(PropertyKeys.selection, _selection);
    }



    public java.lang.String getStyle()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.style, null);
    }
    public void setStyle(java.lang.String _style)
    {
        getStateHelper().put(PropertyKeys.style, _style);
    }


    public boolean isResizableColumns()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.resizableColumns, false);
    }
    public void setResizableColumns(boolean _resizableColumns)
    {
        getStateHelper().put(PropertyKeys.resizableColumns, _resizableColumns);
    }



    public java.lang.Object getSortBy()
    {
        return getStateHelper().eval(PropertyKeys.sortBy, null);
    }
    public void setSortBy(java.lang.Object _sortBy)
    {
        getStateHelper().put(PropertyKeys.sortBy, _sortBy);
    }



    public java.lang.String getSortOrder()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.sortOrder, "ascending");
    }
    public void setSortOrder(java.lang.String _sortOrder)
    {
        getStateHelper().put(PropertyKeys.sortOrder, _sortOrder);
    }



    public int getScrollRows()
    {
        return (java.lang.Integer) getStateHelper().eval(PropertyKeys.scrollRows, 0);
    }
    public void setScrollRows(int _scrollRows)
    {
        getStateHelper().put(PropertyKeys.scrollRows, _scrollRows);
    }



    public Object getRowKey()
    {
        return getStateHelper().eval(PropertyKeys.rowKey, null);
    }
    public void setRowKey(Object _rowKey)
    {
        getStateHelper().put(PropertyKeys.rowKey, _rowKey);
    }



    public java.lang.String getFilterEvent()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.filterEvent, null);
    }
    public void setFilterEvent(java.lang.String _filterEvent)
    {
        getStateHelper().put(PropertyKeys.filterEvent, _filterEvent);
    }



    public int getFilterDelay()
    {
        return (java.lang.Integer) getStateHelper().eval(PropertyKeys.filterDelay,
                java.lang.Integer.MAX_VALUE);
    }
    public void setFilterDelay(int _filterDelay)
    {
        getStateHelper().put(PropertyKeys.filterDelay, _filterDelay);
    }



    public boolean isDraggableColumns()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.draggableColumns, false);
    }
    public void setDraggableColumns(boolean _draggableColumns)
    {
        getStateHelper().put(PropertyKeys.draggableColumns, _draggableColumns);
    }



    public java.lang.String getSortMode()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.sortMode, SINGLE_KEY);
    }
    public void setSortMode(java.lang.String _sortMode)
    {
        getStateHelper().put(PropertyKeys.sortMode, _sortMode);
    }



    public int getFrozenRows()
    {
        return (java.lang.Integer) getStateHelper().eval(PropertyKeys.frozenRows, 0);
    }
    public void setFrozenRows(int _frozenRows)
    {
        getStateHelper().put(PropertyKeys.frozenRows, _frozenRows);
    }

    

    public boolean isDisabledSelection()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.disabledSelection, false);
    }
    public void setDisabledSelection(boolean _disabledSelection)
    {
        getStateHelper().put(PropertyKeys.disabledSelection, _disabledSelection);
    }



    public java.lang.String getRowSelectMode()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.rowSelectMode, "new");
    }
    public void setRowSelectMode(java.lang.String _rowSelectMode)
    {
        getStateHelper().put(PropertyKeys.rowSelectMode, _rowSelectMode);
    }

    
    
    public int getFrozenColumns()
    {
        return (java.lang.Integer) getStateHelper().eval(PropertyKeys.frozenColumns, 0);
    }
    public void setFrozenColumns(int _frozenColumns)
    {
        getStateHelper().put(PropertyKeys.frozenColumns, _frozenColumns);
    }



    public boolean isCaseSensitiveSort()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.caseSensitiveSort, false);
    }
    public void setCaseSensitiveSort(boolean _caseSensitiveSort)
    {
        getStateHelper().put(PropertyKeys.caseSensitiveSort, _caseSensitiveSort);
    }



    public boolean isDisabledTextSelection()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.disabledTextSelection, true);
    }
    public void setDisabledTextSelection(boolean _disabledTextSelection)
    {
        getStateHelper().put(PropertyKeys.disabledTextSelection, _disabledTextSelection);
    }

    
    
    public int getNullSortOrder()
    {
        return (java.lang.Integer) getStateHelper().eval(PropertyKeys.nullSortOrder, 1);
    }
    public void setNullSortOrder(int _nullSortOrder)
    {
        getStateHelper().put(PropertyKeys.nullSortOrder, _nullSortOrder);
    }

    

    public boolean isRowHover()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.rowHover, false);
    }
    public void setRowHover(boolean _rowHover)
    {
        getStateHelper().put(PropertyKeys.rowHover, _rowHover);
    }



    public boolean isRowSelectionEnabled()
    {
        return this.getSelectionMode() != null;
    }



    public boolean isColumnSelectionEnabled()
    {
        return getColumnSelectionMode() != null;
    }



    public String getColumnSelectionMode()
    {
        for (UIComponent child : getChildren())
        {
            if (child.isRendered() && (child instanceof ColumnComponent))
            {
                String selectionMode = ((ColumnComponent) child).getSelectionMode();
                if (selectionMode != null)
                {
                    return selectionMode;
                }
            }
        }
        return null;
    }



    public boolean isSelectionEnabled()
    {
        return this.isRowSelectionEnabled() || isColumnSelectionEnabled();
    }



    public boolean isSingleSelectionMode()
    {
        String selectionMode = this.getSelectionMode();
        String columnSelectionMode = this.getColumnSelectionMode();
        if (selectionMode != null)
        {
            return SINGLE_KEY.equalsIgnoreCase(selectionMode);
        }
        else if (columnSelectionMode != null)
        {
            return SINGLE_KEY.equalsIgnoreCase(columnSelectionMode);
        }
        else
        {
            return false;
        }
    }




    public UIColumn findColumn(String clientId)
    {
        // body columns
        for (UIColumn column : this.getColumns())
        {
            if (column.getColumnKey().equals(clientId))
            {
                return column;
            }
        }
        throw new FacesException("Cannot find column with key: " + clientId);
    }

    
    
    public boolean hasFooterColumn()
    {
        for (UIComponent child : getChildren())
        {
            if (child.isRendered() && (child instanceof UIColumn))
            {
                UIColumn column = (UIColumn) child;
                if (column.getFacet("footer") != null || column.getFooterText() != null)
                    return true;
            }
        }
        return false;
    }



    public String resolveStaticField(ValueExpression expression)
    {
        if (expression != null)
        {
            String expressionString = expression.getExpressionString();
            expressionString = expressionString.substring(2, expressionString.length() - 1);
            return expressionString.substring(expressionString.indexOf('.') + 1);
        }
        else
        {
            return null;
        }
    }



    @SuppressWarnings("el-syntax")
    public String resolveDynamicField(ValueExpression expression)
    {
        if (expression != null)
        {
            String expressionString = expression.getExpressionString();
            expressionString = expressionString.substring(expressionString.indexOf('[') + 1,
                    expressionString.indexOf(']'));
            expressionString = "#{" + expressionString + "}";
            FacesContext context = getFacesContext();
            ELContext eLContext = context.getELContext();
            ValueExpression dynaVE = context.getApplication().getExpressionFactory()
                    .createValueExpression(eLContext, expressionString, String.class);
            return (String) dynaVE.getValue(eLContext);
        }
        else
        {
            return null;
        }
    }

    

    public int getScrollOffset()
    {
        return (java.lang.Integer) getStateHelper().eval("scrollOffset", 0);
    }
    public void setScrollOffset(int scrollOffset)
    {
        getStateHelper().put("scrollOffset", scrollOffset);
    }



    public Object getLocalSelection()
    {
        return getStateHelper().get(PropertyKeys.selection);
    }



    public boolean isRequestSource(FacesContext context)
    {
        String partialSource = context.getExternalContext().getRequestParameterMap()
                .get(Constants.RequestParams.PARTIAL_SOURCE_PARAM);
        return partialSource != null && this.getClientId(context).equals(partialSource);
    }



    public boolean isBodyUpdate(FacesContext context)
    {
        String clientId = this.getClientId(context);
        return context.getExternalContext().getRequestParameterMap()
                .containsKey(clientId + "_updateBody");
    }



    @SuppressWarnings({ "rawtypes", "unchecked" })
    public Object getRowKeyFromModel(Object object)
    {
        DataModel model = getDataModel();
        if (!(model instanceof SelectableDataModel))
        {
            throw new FacesException(
                    "DataModel must implement fr.lixtec.lixbox.ui.faces.model.SelectableDataModel when selection is enabled.");
        }
        return ((SelectableDataModel) getDataModel()).getRowKey(object);
    }



    @SuppressWarnings("rawtypes")
    public Serializable getRowData(String rowKey)
    {
        Map<String, Object> requestMap = getFacesContext().getExternalContext().getRequestMap();
        String var = this.getVar();
        Collection data = (Collection) getDataModel().getWrappedData();
        for (Iterator it = data.iterator(); it.hasNext();)
        {
            Object object = it.next();
            requestMap.put(var, object);
            if (String.valueOf(this.getRowKey()).equals(rowKey))
            {
                return (Serializable) object;
            }
        }
        return null;
    }




    public void findSelectedRowKeys()
    {
        Object selection = this.getSelection();
        selectedRowKeys = new ArrayList<>();
        boolean hasRowKeyVe = this.getValueExpression("rowKey") != null;
        String var = this.getVar();
        Map<String, Object> requestMap = getFacesContext().getExternalContext().getRequestMap();
        if (isSelectionEnabled() && selection != null)
        {
            if (this.isSingleSelectionMode())
            {
                addToSelectedRowKeys(selection, requestMap, var, hasRowKeyVe);
            }
            else
            {
                if (selection.getClass().isArray())
                {
                    for (int i = 0; i < Array.getLength(selection); i++)
                    {
                        addToSelectedRowKeys(Array.get(selection, i), requestMap, var, hasRowKeyVe);
                    }
                }
                else
                {
                    List<?> list = (List<?>) selection;
                    for (Iterator<? extends Object> it = list.iterator(); it.hasNext();)
                    {
                        addToSelectedRowKeys(it.next(), requestMap, var, hasRowKeyVe);
                    }
                }
            }
            requestMap.remove(var);
        }
    }



    protected void addToSelectedRowKeys(Object object, Map<String, Object> map, String var,
            boolean hasRowKey)
    {
        if (hasRowKey)
        {
            map.put(var, object);
            Object rowKey = this.getRowKey();
            if (rowKey != null)
            {
                this.selectedRowKeys.add(rowKey);
            }
        }
        else
        {
            Object rowKey = this.getRowKeyFromModel(object);
            if (rowKey != null)
            {
                this.selectedRowKeys.add(rowKey);
            }
        }
    }



    public List<Object> getSelectedRowKeys()
    {
        return selectedRowKeys;
    }



    public String getSelectedRowKeysAsString()
    {
        StringBuilder builder = new StringBuilder();
        for (Iterator<Object> iter = getSelectedRowKeys().iterator(); iter.hasNext();)
        {
            builder.append(iter.next());
            if (iter.hasNext())
            {
                builder.append(",");
            }
        }
        return builder.toString();
    }



    public int getColumnsCount()
    {
        return CollectionUtil.isNotEmpty(columns)?columns.size():0;                
    }



    public List<UIColumn> getColumns()
    {
        if (columns == null)
        {
            columns = new ArrayList<>();
            for (UIComponent child : this.getChildren())
            {
                if (child instanceof ColumnComponent)
                {
                    columns.add((UIColumn) child);
                }                
            }
        }
        return columns;
    }
    public void setColumns(List<UIColumn> columns)
    {
        this.columns = columns;
    }



    public String getScrollState()
    {
        Map<String, String> params = getFacesContext().getExternalContext()
                .getRequestParameterMap();
        String name = this.getClientId() + "_scrollState";
        String value = params.get(name);
        return value == null ? "0,0" : value;
    }



    public String resolveSelectionMode()
    {
        String tableSelectionMode = this.getSelectionMode();
        String columnSelectionMode = this.getColumnSelectionMode();
        String selectionMode = null;
        if (tableSelectionMode != null)
            selectionMode = tableSelectionMode;
        else if (columnSelectionMode != null)
            selectionMode = SINGLE_KEY.equals(columnSelectionMode) ? "radio" : "checkbox";
        return selectionMode;
    }



    @Override
    protected boolean requiresColumns()
    {
        return true;
    }

    

    @Override
    protected void processColumnFacets(FacesContext context, PhaseId phaseId)
    {
        if (getChildCount() > 0)
        {
            for (UIComponent child : this.getChildren())
            {
                if (child.isRendered() &&
                    child instanceof UIColumn &&
                    child instanceof ColumnComponent)
                {
                    for (UIComponent facet : child.getFacets().values())
                    {
                        process(context, facet, phaseId);
                    }
                }                        
            }
        }
    }

    

    public ValueExpression getSortByVE()
    {
        return this.sortByVE;
    }
    public void setSortByVE(ValueExpression ve)
    {
        this.sortByVE = ve;
    }

    

    public ValueExpression getDefaultSortByVE()
    {
        return this.getValueExpression("defaultSortBy");
    }
    public void setDefaultSortByVE(ValueExpression ve)
    {
        this.setValueExpression("defaultSortBy", ve);
    }



    public String getDefaultSortOrder()
    {
        return (String) this.getStateHelper().get("defaultSortOrder");
    }
    public void setDefaultSortOrder(String val)
    {
        this.getStateHelper().put("defaultSortOrder", val);
    }



    public MethodExpression getDefaultSortFunction()
    {
        return (MethodExpression) this.getStateHelper().get("defaultSortFunction");
    }
    public void setDefaultSortFunction(MethodExpression obj)
    {
        this.getStateHelper().put("defaultSortFunction", obj);
    }



    @SuppressWarnings("rawtypes")
    public void updateValue(Object value)
    {
        Object originalValue = this.getValue();
        if (originalValue instanceof SelectableDataModel)
        {
            this.setValue(new SelectableDataModelWrapper((SelectableDataModel) originalValue, value));
        }
        else 
        {
            this.setValue(value);
        }
    }
}