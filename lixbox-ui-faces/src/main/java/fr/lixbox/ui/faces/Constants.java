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
package fr.lixbox.ui.faces;

public class Constants 
{
    public static final String HELPER_RENDERER = "fr.lixtec.lixbox.ui.faces.HELPER_RENDERER";
    
    
    
    private Constants()
    {
        //util class
    }
    
    
    
    public static class ContextParams 
    {
        // JSF context params
        public static final String INTERPRET_EMPTY_STRING_AS_NULL = "javax.faces.INTERPRET_EMPTY_STRING_SUBMITTED_VALUES_AS_NULL";
        
        private ContextParams()
        {
            //util class
        }
    }

    
    public static class RequestParams 
    {
        // JSF request params
        public static final String PARTIAL_REQUEST_PARAM = "javax.faces.partial.ajax";
        public static final String PARTIAL_UPDATE_PARAM = "javax.faces.partial.render";
        public static final String PARTIAL_PROCESS_PARAM = "javax.faces.partial.execute";
        public static final String PARTIAL_SOURCE_PARAM = "javax.faces.source";
        public static final String PARTIAL_BEHAVIOR_EVENT_PARAM = "javax.faces.behavior.event";
        
        private RequestParams()
        {
            //util class
        }
    }
}
