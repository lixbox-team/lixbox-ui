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

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.render.FacesRenderer;

import fr.lixbox.ui.faces.component.table.ColumnComponent;
import fr.lixbox.ui.faces.renderkit.CoreRenderer;

/**
 * Ce renderer affiche une column au format bootstrap
 * 
 * @author ludovic.terral
 */
@FacesRenderer(componentFamily = "lixbox.component.table", rendererType = "lixbox.component.table.bootstrap.ColumnComponent")
public class ColumnRenderer extends CoreRenderer
{
    // ----------- Methode(s) -----------
    @Override
    public void encodeBegin(FacesContext context, UIComponent component) throws IOException 
    {
        if ((context == null) || (component == null) || !(component instanceof ColumnComponent))
        {
            throw new NullPointerException();
        }
    }
    
    
    
    @Override
    public void encodeEnd(FacesContext context, UIComponent component) throws IOException
    {
        if ((context == null) || (component == null) || !(component instanceof ColumnComponent))
        {
            throw new NullPointerException();
        }
        ColumnComponent column = (ColumnComponent) component;
        encodeChildren(context, column);
    }



    @Override
    public void encodeChildren(FacesContext context, UIComponent component) throws IOException
    {
        if ((context == null) || (component == null) || !(component instanceof ColumnComponent))
        {
            throw new NullPointerException();
        }

        int childCount = component.getChildCount();
        if (childCount > 0)
        {
            for (int i = 0; i < childCount; i++)
            {
                UIComponent child = component.getChildren().get(i);
                child.encodeAll(context);
            }
        }
    }

    

    @Override
    public boolean getRendersChildren()
    {
        return true;
    }
}
