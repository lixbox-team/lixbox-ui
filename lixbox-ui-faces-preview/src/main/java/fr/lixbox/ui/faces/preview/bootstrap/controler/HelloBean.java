package fr.lixbox.ui.faces.preview.bootstrap.controler;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

import fr.lixbox.ui.faces.event.SearchEvent;

@Named("helloBean")
@RequestScoped
public class HelloBean implements Serializable
{
	private static final long serialVersionUID = 5275438903032538804L;
	private String query;

    
    public String getQuery()
    {
        return query;
    }
    public void setQuery(String query)
    {
        this.query = query;
    }
    


    public String getMessage()
    {
        return "Hi, this is your query: "+ query;
    }



    public LocalDateTime getTime()
    {
        return LocalDateTime.now();
    }



    public String refreshMessage(SearchEvent event)
    {
        return "Hi there!";
    }



    public String search()
    {        
        return "/pages/search.xhtml";
    }
}