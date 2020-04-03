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
package fr.lixbox.ui.faces.model;

import javax.faces.model.ListDataModel;

@SuppressWarnings("rawtypes")
public class SelectableDataModelWrapper extends ListDataModel implements SelectableDataModel
{
    // ----------- Attribut(s) -----------
    private SelectableDataModel original;



    // ----------- Methode(s) -----------
    public SelectableDataModelWrapper(SelectableDataModel original, Object data)
    {
        this.original = original;
        setWrappedData(data);
    }



    public Object getRowData(String rowKey)
    {
        return original.getRowData(rowKey);
    }



    @SuppressWarnings("unchecked")
    public Object getRowKey(Object object)
    {
        return original.getRowKey(object);
    }
}