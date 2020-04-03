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
package fr.lixbox.ui.faces.component.table;

import javax.faces.component.FacesComponent;

import fr.lixbox.ui.faces.api.UIColumn;
import fr.lixbox.ui.faces.api.UiData;
import fr.lixbox.ui.faces.component.LixboxComponent;

/**
 * Ce composant assure l'affichage du widget alert
 * 
 * @author ludovic.terral
 */
@FacesComponent(ColumnComponent.COMPONENT_NAME)
public class ColumnComponent extends UiData implements UIColumn, LixboxComponent
{
    // ----------- Attribut(s) -----------
    public static final String DEFAULT_RENDERER = "lixbox.component.table.bootstrap.ColumnComponent";
    public static final String COMPONENT_FAMILY = "lixbox.component.table";    
    public static final String COMPONENT_NAME = COMPONENT_FAMILY+".ColumnComponent";

    protected enum PropertyKeys
    {
        globalStyle, order, sortBy, style, styleClass, filterBy, filterStyle, 
        filterStyleClass, headerText, footerText, selectionMode, 
        disabledSelection, resizable, exportable, filterValue, width, toggleable, 
        filterFunction, field, sortable, filterable, visible, selectRow, uid,
    }



    // ----------- Methode(s) -----------
    public ColumnComponent()
    {
        super();
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



    public Object getSortBy()
    {
        return getStateHelper().eval(PropertyKeys.sortBy, null);
    }
    public void setSortBy(Object _sortBy)
    {
        getStateHelper().put(PropertyKeys.sortBy, _sortBy);
    }



    public String getStyle()
    {
        return (String) getStateHelper().eval(PropertyKeys.style, null);
    }
    public void setStyle(java.lang.String _style)
    {
        getStateHelper().put(PropertyKeys.style, _style);
    }



    public Object getFilterBy()
    {
        return getStateHelper().eval(PropertyKeys.filterBy, null);
    }
    public void setFilterBy(java.lang.Object _filterBy)
    {
        getStateHelper().put(PropertyKeys.filterBy, _filterBy);
    }



    public java.lang.String getFilterStyle()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.filterStyle, null);
    }
    public void setFilterStyle(java.lang.String _filterStyle)
    {
        getStateHelper().put(PropertyKeys.filterStyle, _filterStyle);
    }



    public java.lang.String getFilterStyleClass()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.filterStyleClass, null);
    }
    public void setFilterStyleClass(java.lang.String _filterStyleClass)
    {
        getStateHelper().put(PropertyKeys.filterStyleClass, _filterStyleClass);
    }



    public java.lang.String getHeaderText()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.headerText, null);
    }
    public void setHeaderText(java.lang.String _headerText)
    {
        getStateHelper().put(PropertyKeys.headerText, _headerText);
    }



    public java.lang.String getFooterText()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.footerText, null);
    }
    public void setFooterText(java.lang.String _footerText)
    {
        getStateHelper().put(PropertyKeys.footerText, _footerText);
    }



    public java.lang.String getSelectionMode()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.selectionMode, null);
    }
    public void setSelectionMode(java.lang.String _selectionMode)
    {
        getStateHelper().put(PropertyKeys.selectionMode, _selectionMode);
    }



    public boolean isDisabledSelection()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.disabledSelection, false);
    }
    public void setDisabledSelection(boolean _disabledSelection)
    {
        getStateHelper().put(PropertyKeys.disabledSelection, _disabledSelection);
    }



    public boolean isResizable()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.resizable, true);
    }
    public void setResizable(boolean _resizable)
    {
        getStateHelper().put(PropertyKeys.resizable, _resizable);
    }



    public boolean isExportable()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.exportable, true);
    }
    public void setExportable(boolean _exportable)
    {
        getStateHelper().put(PropertyKeys.exportable, _exportable);
    }



    public java.lang.Object getFilterValue()
    {
        return getStateHelper().eval(PropertyKeys.filterValue, null);
    }
    public void setFilterValue(java.lang.Object _filterValue)
    {
        getStateHelper().put(PropertyKeys.filterValue, _filterValue);
    }



    public java.lang.String getWidth()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.width, null);
    }
    public void setWidth(java.lang.String _width)
    {
        getStateHelper().put(PropertyKeys.width, _width);
    }



    public boolean isToggleable()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.toggleable, true);
    }
    public void setToggleable(boolean _toggleable)
    {
        getStateHelper().put(PropertyKeys.toggleable, _toggleable);
    }



    public javax.el.MethodExpression getFilterFunction()
    {
        return (javax.el.MethodExpression) getStateHelper().eval(PropertyKeys.filterFunction, null);
    }
    public void setFilterFunction(javax.el.MethodExpression _filterFunction)
    {
        getStateHelper().put(PropertyKeys.filterFunction, _filterFunction);
    }



    public java.lang.String getField()
    {
        return (java.lang.String) getStateHelper().eval(PropertyKeys.field, null);
    }
    public void setField(java.lang.String _field)
    {
        getStateHelper().put(PropertyKeys.field, _field);
    }



    public boolean isSortable()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.sortable, true);
    }
    public void setSortable(boolean _sortable)
    {
        getStateHelper().put(PropertyKeys.sortable, _sortable);
    }



    public boolean isFilterable()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.filterable, true);
    }
    public void setFilterable(boolean _filterable)
    {
        getStateHelper().put(PropertyKeys.filterable, _filterable);
    }



    public boolean isVisible()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.visible, true);
    }
    public void setVisible(boolean _visible)
    {
        getStateHelper().put(PropertyKeys.visible, _visible);
    }



    public boolean isSelectRow()
    {
        return (java.lang.Boolean) getStateHelper().eval(PropertyKeys.selectRow, true);
    }
    public void setSelectRow(boolean _selectRow)
    {
        getStateHelper().put(PropertyKeys.selectRow, _selectRow);
    }



    public java.lang.String getUid()
    {
        return (String) getStateHelper().eval(PropertyKeys.uid, null);
    }
    public void setUid(java.lang.String _uid)
    {
        getStateHelper().put(PropertyKeys.uid, _uid);
    }



    public String getOrder()
    {
        return (String) getStateHelper().eval(PropertyKeys.order, null);
    }
    public void setOrder(String order)
    {
        getStateHelper().put(PropertyKeys.order, order);
    }



    public boolean isDynamic()
    {
        return false;
    }
    public String getColumnKey()
    {
        return this.getClientId();
    }
}