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
package fr.lixbox.ui.faces.renderkit.bootstrap.table;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.faces.FacesException;
import javax.faces.component.UIComponent;
import javax.faces.component.UIForm;
import javax.faces.component.behavior.ClientBehavior;
import javax.faces.component.behavior.ClientBehaviorContext;
import javax.faces.component.behavior.ClientBehaviorHolder;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;
import javax.faces.render.FacesRenderer;

import fr.lixbox.common.util.CollectionUtil;
import fr.lixbox.common.util.StringUtil;
import fr.lixbox.ui.faces.api.UIColumn;
import fr.lixbox.ui.faces.api.UiData;
import fr.lixbox.ui.faces.component.table.ColumnComponent;
import fr.lixbox.ui.faces.component.table.DataTableComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

@FacesRenderer(componentFamily = "lixbox.component.table", rendererType = "lixbox.component.table.bootstrap.DataTableComponent")
public class DataTableRenderer extends CoreRenderer
{
    // ----------- Attribut(s) -----------  
    private static final String CONTAINER_CLASS = "table-responsive";
    private static final String TABLE_WRAPPER_CLASS = "table dataTable";
    private static final String DISABLED_ATTRIBUTE = "disabled";
    private static final String CHECKED_ATTRIBUTE = "checked";
    private static final String INPUT_ELEMENT = "input";
    private static final String SORT_BY_ATTRIBUTE = "sortBy";
    private static final String STYLE_ATTRIBUTE = "style";
    private static final String CLASS_ATTRIBUTE = "class";
    
    
    
    // ----------- Methode(s) -----------  
    @Override
    public void decode(FacesContext context, UIComponent component)
    {
        decodeBehaviors(context, component);
    }



    @Override
    public void encodeChildren(FacesContext context, UIComponent component) throws IOException
    {
        // Rendering happens on encodeEnd
    }



    @Override
    public boolean getRendersChildren()
    {
        return true;
    }
    


    @Override
    public void encodeEnd(FacesContext context, UIComponent component) throws IOException
    {
        UIForm form = new UIForm();
        if (getSurroundingForm(component, true)==null)
        {
            form.encodeBegin(context);
        }
        DataTableComponent table = (DataTableComponent) component;
        preRender(table);
        encodeMarkup(context, table);
        encodeScript(context, table);
        context.getResponseWriter().endElement("div");
        if (getSurroundingForm(component, true)==null)
        {
            form.encodeEnd(context);
        }
    }
    
    

    protected void encodeFacet(FacesContext context, UiData data, String facet, String styleClass)
            throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        UIComponent component = data.getFacet(facet);
        if (component != null && component.isRendered())
        {
            writer.startElement("div", null);
            writer.writeAttribute(CLASS_ATTRIBUTE, styleClass, null);
            component.encodeAll(context);
            writer.endElement("div");
        }
    }



    protected void preRender(DataTableComponent table)
    {
        boolean defaultSorted = (table.getValueExpression(SORT_BY_ATTRIBUTE) != null || table.getSortBy() != null);
        if (defaultSorted)
        {
            table.setDefaultSortByVE(table.getValueExpression(SORT_BY_ATTRIBUTE));
            table.setDefaultSortOrder(table.getSortOrder());
            table.setRowIndex(-1);
        }
    }



    protected void encodeScript(FacesContext context, DataTableComponent table) throws IOException
    {       
        ResponseWriter writer = context.getResponseWriter();
        String clientId = table.getClientId(context);
        String escapedId = escapeClientId(table.getClientId(context));
        writer.startElement("script", table);
        writer.writeAttribute("id",  clientId+"_s", "id");
        writer.append("function "+escapedId+"_reload() {");
        writer.append("$(\"."+escapedId+"\").DataTable({\n"); 
        writer.append("    responsive: true,");
        writer.append("    language: {\n");
        writer.append("        paginate: {\n");
        writer.append("            previous: \"Prev\",\n");
        writer.append("            next: \"Next\"\n");
        writer.append("        }\n");
        writer.append("    },\n");
        writer.append("    drawCallback: function() {\n");
        writer.append("        $(\".dataTables_filter\").addClass(\"float-right\")\n");
        writer.append("        $(\".dataTables_paginate\").addClass(\"float-right\")\n");
        writer.append("    }});");
//        encodeClientBehaviors(context, table, clientId);
        writer.append("};");        
        writer.append("window.addEventListener(\"load\", function(){");
        writer.append("$(\"."+escapedId+"\").DataTable({\n");
        writer.append("    responsive: true,");
        writer.append("    language: {\n");
        writer.append("        paginate: {\n");
        writer.append("            previous: \"Prev\",\n");
        writer.append("            next: \"Next\"\n");
        writer.append("        }\n");
        writer.append("    },\n");
        writer.append("    drawCallback: function() {\n");
        writer.append("        $(\".dataTables_filter\").addClass(\"float-right\")\n");
        writer.append("        $(\".dataTables_paginate\").addClass(\"float-right\")\n");
        writer.append("    }\n");
        writer.append("});"); 
        encodeClientBehaviors(context, table, clientId);
        writer.append("});");
        writer.endElement("script");
    }

    
    
    protected void encodeClientBehaviors(FacesContext context, ClientBehaviorHolder component, String clientId)
            throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        String escapedId = escapeClientId(clientId);
        writer.append("$(\"."+escapedId+" tbody\").on( 'click', 'tr', function () {\n" + 
                " if (this.dataset.rk != null){ \n"+
                "        if ( $(this).hasClass('selected') ) {\n" + 
                "            $(this).removeClass('selected');\n" +
                "            $(\"."+escapedId+"_selection\").val(this.dataset.rk);");
        Map<String, List<ClientBehavior>> clientBehaviors = component.getClientBehaviors();
        if (clientBehaviors != null && !clientBehaviors.isEmpty())
        {
            //RowSelect map
            List<ClientBehavior> events = clientBehaviors.get("rowUnselect");
            if (CollectionUtil.isNotEmpty(events))
            {
                ClientBehavior behavior = events.get(0);
                ClientBehaviorContext cbc = ClientBehaviorContext.createClientBehaviorContext(
                        context, (UIComponent) component, "rowUnselect", clientId, Collections.emptyList());
                String script = behavior.getScript(cbc);
                if (script != null)
                {
                    writer.append(script);
                }
            }
        }
        writer.append("       }\n" + 
                "        else {\n" + 
                "      $('tr.selected').removeClass('selected');\n" + 
                "      $(this).addClass('selected');\n" +
                "      $(\"."+escapedId+"_selection\").val(this.dataset.rk);"); 
        if (clientBehaviors != null && !clientBehaviors.isEmpty())
        {
            //RowSelect map
            List<ClientBehavior> events = clientBehaviors.get("rowSelect");
            if (CollectionUtil.isNotEmpty(events))
            {
                ClientBehavior behavior = events.get(0);
                ClientBehaviorContext cbc = ClientBehaviorContext.createClientBehaviorContext(
                        context, (UIComponent) component, "rowSelect", clientId, Collections.emptyList());
                String script = behavior.getScript(cbc);
                if (script != null)
                {
                    writer.append(script);
                }
            }
        }
        writer.append("        }}});"); 
    }
    


    protected void encodeMarkup(FacesContext context, DataTableComponent table) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        String clientId = table.getClientId(context);
        boolean scrollable = table.isScrollable();
        String style = table.getStyle();
        
        // style class
        String containerClass = CONTAINER_CLASS;
        writer.startElement("div", table);
        writer.writeAttribute("id", escapeClientId(clientId)+"_div", "id");
        writer.writeAttribute(CLASS_ATTRIBUTE, containerClass, "styleClass");
        if (style != null)
        {
            writer.writeAttribute(STYLE_ATTRIBUTE, style, STYLE_ATTRIBUTE);
        }
        encodeFacet(context, table.getHeader(), "");
        encodeTable(context, table);
        encodeFacet(context, table.getFooter(), "");
        if (table.isSelectionEnabled())
        {
            encodeStateHolder(context, table.getClientId(context) + "_selection", table.getSelectedRowKeysAsString());
        }
        if (table.isDraggableColumns())
        {
            encodeStateHolder(context, table.getClientId(context) + "_columnOrder", null);
        }
        if (scrollable)
        {
            encodeStateHolder(context, table.getClientId(context) + "_scrollState", table.getScrollState());
        }
    }



    protected void encodeTable(FacesContext context, DataTableComponent table) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("table", null);
        renderId(context, table);
        String styleClass = StringUtil.isNotEmpty(table.getStyleClass())?escapeClientId(table.getClientId())+" " + TABLE_WRAPPER_CLASS +" "+table.getStyleClass():escapeClientId(table.getClientId())+" " + TABLE_WRAPPER_CLASS;
        writer.writeAttribute(CLASS_ATTRIBUTE, styleClass, null);
        writer.writeAttribute("role", "grid", null);
        writer.writeAttribute("width", "100%", null);
        encodeThead(context, table);
        encodeTFoot(context, table);
        encodeTbody(context, table, false);
        writer.endElement("table");
    }

    
    
    protected void encodeThead(FacesContext context, DataTableComponent table) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        String theadClientId = table.getClientId(context) + "_head";                
        writer.startElement("thead", null);
        writer.writeAttribute("id", theadClientId, null);
        writer.writeAttribute(CLASS_ATTRIBUTE, escapeClientId(theadClientId), null);
        writer.startElement("tr", null);
        for (UIColumn column : table.getColumns())
        {
            encodeColumnHeader(context, (UIColumn) column);
        }
        writer.endElement("tr");
        writer.endElement("thead");
    }
        
    
    
    protected void encodeColumnHeader(FacesContext context, UIColumn column)
            throws IOException
    {
        if (!column.isRendered())
        {
            return;
        }
        ResponseWriter writer = context.getResponseWriter();
        String clientId = column.getContainerClientId(context);
        String columnClass = "";
        columnClass = escapeClientId(clientId)+" "+ (StringUtil.isNotEmpty(column.getStyleClass()) ? columnClass + " " + column.getStyleClass(): columnClass);
        String style = column.getStyle();
        String width = column.getWidth();
        if (width != null)
        {
            String unit = width.endsWith("%") ? "" : "px";
            if (style != null)
            {
                style = style + ";width:" + width + unit;
            }
            else
            {
                style = "width:" + width + unit;
            }
        }
        writer.startElement("th", null);
        writer.writeAttribute("id", column.getClientId(), null);
        writer.writeAttribute(CLASS_ATTRIBUTE, columnClass, null);
        writer.writeAttribute("role", "columnheader", null);
        if (style != null) writer.writeAttribute(STYLE_ATTRIBUTE, style, null);
        encodeColumnHeaderContent(context, column);
        writer.endElement("th");
    }



    protected void encodeColumnHeaderContent(FacesContext context, UIColumn column)
            throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        UIComponent header = column.getFacet("header");
        String headerText = column.getHeaderText();
        if (header != null)
        {
            header.encodeAll(context);
        }
        else if (headerText != null)
        {
            writer.write(headerText);
        }
    }



    protected void encodeTFoot(FacesContext context, DataTableComponent table) throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        boolean hasFooterColumn = table.hasFooterColumn();
        boolean shouldRenderFooter = (hasFooterColumn);
        if (!shouldRenderFooter)
        {
            return;
        }
        writer.startElement("tfoot", null);
        writer.writeAttribute("id", table.getClientId(context) + "_foot", null);
        writer.writeAttribute(CLASS_ATTRIBUTE, escapeClientId(table.getClientId(context) + "_foot"), null);
        writer.startElement("tr", null);
        for (UIColumn column : table.getColumns())
        {
            encodeColumnFooter(context, (UIColumn) column);
        }
        writer.endElement("tr");
        writer.endElement("tfoot");        
    }



    protected void encodeColumnFooter(FacesContext context, UIColumn column)
        throws IOException
    {
        if (!column.isRendered())
        {
            return;
        }
        ResponseWriter writer = context.getResponseWriter();
        String style = column.getStyle();
        String styleClass = column.getStyleClass() == null ? "" : column.getStyleClass();        
        writer.startElement("td", null);
        writer.writeAttribute(CLASS_ATTRIBUTE, styleClass, null);
        if (style != null) writer.writeAttribute(STYLE_ATTRIBUTE, style, null);
        
        // Footer content
        UIComponent facet = column.getFacet("footer");
        String text = column.getFooterText();
        if (facet != null)
        {
            facet.encodeAll(context);
        }
        else if (text != null)
        {
            writer.write(text);
        }
        writer.endElement("td");
    }




    protected void encodeTbody(FacesContext context, DataTableComponent table, boolean dataOnly)
            throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        String rowIndexVar = table.getRowIndexVar();
        String clientId = table.getClientId(context);
        String tbodyClientId = clientId + "_data";
        if (table.isSelectionEnabled())
        {
            table.findSelectedRowKeys();
        }
        int first = table.getFirst();
        int rowCount = table.getRowCount();
        if (!dataOnly)
        {
            writer.startElement("tbody", null);
            writer.writeAttribute("id", tbodyClientId, null);
        }
        if (rowCount>0)
        {
            encodeRows(context, table, first, rowCount);
        }        
        if (!dataOnly)
        {
            writer.endElement("tbody");
        }
        
        // Cleanup
        table.setRowIndex(-1);
        if (rowIndexVar != null)
        {
            context.getExternalContext().getRequestMap().remove(rowIndexVar);
        }
    }



    protected void encodeRows(FacesContext context, DataTableComponent table, int first, int last) 
        throws IOException
    {
        for (int i = first; i < last; i++)
        {
            table.setRowIndex(i);
            if (!table.isRowAvailable())
            {
                break;
            }
            encodeRow(context, table, i);
        }
    }

    

    protected boolean encodeRow(FacesContext context, DataTableComponent table, int rowIndex)
            throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        boolean selectionEnabled = table.isSelectionEnabled();
        Object rowKey = null;
        List<UIColumn> columns = table.getColumns();
        if (selectionEnabled)
        {
            rowKey = table.getRowKey();
            if (rowKey == null) rowKey = table.getRowKeyFromModel(table.getRowData());
        }
        
        // Preselection
        boolean selected = table.getSelectedRowKeys().contains(rowKey);
        writer.startElement("tr", null);
        writer.writeAttribute("data-ri", rowIndex, null);
        if (rowKey != null)
        {
            writer.writeAttribute("data-rk", rowKey, null);
        }
        writer.writeAttribute("role", "row", null);
        if (selectionEnabled)
        {
            writer.writeAttribute("aria-selected", String.valueOf(selected), null);
        }
        for (int i = 0; i < table.getColumnsCount(); i++)
        {
            UIColumn column = columns.get(i);
            if (column instanceof ColumnComponent)
            {
                encodeCell(context, table, column, selected);
            }            
        }
        writer.endElement("tr");        
        return true;
    }



    protected void encodeCell(FacesContext context, DataTableComponent table, UIColumn column, boolean selected) throws IOException
    {
        if (!column.isRendered())
        {
            return;
        }
        ResponseWriter writer = context.getResponseWriter();
        boolean selectionEnabled = column.getSelectionMode() != null;
        String style = column.getStyle();
        writer.startElement("td", null);
        writer.writeAttribute("role", "gridcell", null);
        if (style != null) writer.writeAttribute(STYLE_ATTRIBUTE, style, null);
        if (column.getStyleClass() != null)
        {
            writer.writeAttribute(CLASS_ATTRIBUTE, column.getStyleClass(), null);
        }
        
        if (column instanceof ColumnComponent)
        {
            String uid = (null != ((ColumnComponent) column).getUid() && !((ColumnComponent) column).getUid().isEmpty() ? ((ColumnComponent) column).getUid() : null);
            if (null == uid)
            {
                StringBuilder attrValues = new StringBuilder();
                Map<String, Object> passThroughAttributes = ((ColumnComponent) column).getPassThroughAttributes();
                Collection<Object> colObjects = passThroughAttributes.values();
                List<Object> listObjects = new ArrayList<>(colObjects);
                int i = 0;
                for (Object object : listObjects)
                {
                    i++;
                    if (object instanceof String)
                    {
                        attrValues.append((String) object);
                        if (0 < listObjects.size() && i < listObjects.size())
                        {
                            attrValues.append("-");
                        }
                    }
                }
                if (null != attrValues && 0 < attrValues.length())
                {
                    uid = attrValues.toString().replace("#", "").replace("{", "").replace("}", "");
                }
            }
            if (null != ((ColumnComponent) column).getOrder())
            {
                writer.writeAttribute("data-order", ((ColumnComponent) column).getOrder(), null);
            }
            if (null == uid)
            {
                StringBuilder attrValues = new StringBuilder();
                List<UIComponent> childrenElements = ((ColumnComponent) column).getChildren();
                if (null != childrenElements && !childrenElements.isEmpty())
                {
                    int i = 0;
                    for (Object object : childrenElements)
                    {
                        i++;
                        attrValues.append(object.toString());
                        if (0 < childrenElements.size() && i < childrenElements.size())
                        {
                            attrValues.append("-");
                        }
                    }
                    if (null != attrValues && 0 < attrValues.length())
                    {
                        uid = attrValues.toString().replace("#", "").replace("{", "").replace("}", "");
                    }
                }
            }
            if (null != uid && !uid.isEmpty())
            {
            writer.writeAttribute("data-uid", uid, null);
            }
        }
        if (selectionEnabled)
        {
            encodeColumnSelection(context, table, column, selected);
        }
        ((ColumnComponent)column).encodeChildren(context);
        writer.endElement("td");
    }



    protected void encodeFacet(FacesContext context, UIComponent facet,
            String styleClass) throws IOException
    {
        if (facet == null) return;
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement("div", null);
        writer.writeAttribute(CLASS_ATTRIBUTE, styleClass, null);
        facet.encodeAll(context);
        writer.endElement("div");
    }



    protected void encodeStateHolder(FacesContext context, String id, String value)
            throws IOException
    {
        String escapedId=escapeClientId(id);
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement(INPUT_ELEMENT, null);
        writer.writeAttribute("type", "hidden", null);
        writer.writeAttribute("id", id, null);
        writer.writeAttribute("name", id, null);
        writer.writeAttribute("autocomplete", "off", null);
        writer.writeAttribute(CLASS_ATTRIBUTE, escapedId, null);
        if (value != null)
        {
            writer.writeAttribute("value", value, null);
        }
        writer.endElement(INPUT_ELEMENT);
    }



    protected void encodeColumnSelection(FacesContext context, DataTableComponent table,
            UIColumn column, boolean selected) throws IOException
    {
        String selectionMode = column.getSelectionMode();
        boolean disabled = table.isDisabledSelection();
        if ("single".equalsIgnoreCase(selectionMode))
        {
            encodeRadio(context, table, selected, disabled);
        }
        else if ("multiple".equalsIgnoreCase(selectionMode))
        {
            encodeCheckbox(context, table, selected, disabled);
        }
        else
        {
            throw new FacesException("Invalid column selection mode:" + selectionMode);
        }
    }



    protected void encodeRadio(FacesContext context, DataTableComponent table, boolean checked, boolean disabled)
        throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement(INPUT_ELEMENT, null);
        writer.writeAttribute("type", "checkbox", null);
        writer.writeAttribute("name", table.getClientId(context) + "_checkbox", null);
        if (checked)
        {
            writer.writeAttribute(CHECKED_ATTRIBUTE, CHECKED_ATTRIBUTE, null);
        }
        if (disabled)
        {
            writer.writeAttribute(DISABLED_ATTRIBUTE, DISABLED_ATTRIBUTE, null);
        }
        writer.endElement(INPUT_ELEMENT);
    }



    protected void encodeCheckbox(FacesContext context, DataTableComponent table, boolean checked, boolean disabled) 
        throws IOException
    {
        ResponseWriter writer = context.getResponseWriter();
        writer.startElement(INPUT_ELEMENT, null);
        writer.writeAttribute("type", "radio", null);
        writer.writeAttribute("name", table.getClientId(context) + "_radio", null);
        if (checked)
        {
            writer.writeAttribute(CHECKED_ATTRIBUTE, CHECKED_ATTRIBUTE, null);
        }
        if (disabled)
        {
            writer.writeAttribute(DISABLED_ATTRIBUTE, DISABLED_ATTRIBUTE, null);
        }
        writer.endElement(INPUT_ELEMENT);
    }
}