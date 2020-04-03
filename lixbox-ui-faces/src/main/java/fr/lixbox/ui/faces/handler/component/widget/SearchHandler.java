package fr.lixbox.ui.faces.handler.component.widget;

import javax.faces.view.facelets.ComponentConfig;
import javax.faces.view.facelets.ComponentHandler;
import javax.faces.view.facelets.MetaRule;
import javax.faces.view.facelets.MetaRuleset;

import com.sun.faces.facelets.tag.MethodRule;

import fr.lixbox.ui.faces.event.SearchEvent;

public class SearchHandler extends ComponentHandler
{
    private static final MetaRule SEARCH_LISTENER = new MethodRule("searchListener", String.class, new Class[] { SearchEvent.class });



    public SearchHandler(ComponentConfig config)
    {
        super(config);
    }



    @SuppressWarnings("rawtypes")
    @Override
    protected MetaRuleset createMetaRuleset(Class type)
    {
        MetaRuleset metaRuleset = super.createMetaRuleset(type);
        metaRuleset.addRule(SEARCH_LISTENER);
        return metaRuleset;
    }
}
