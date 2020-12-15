package fr.lixbox.ui.faces.preview.bootstrap.controler;

import java.io.Serializable;

import javax.enterprise.context.RequestScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;

@Named("preview")
@RequestScoped
public class PreviewController implements Serializable
{
	private static final long serialVersionUID = 5232904717218755435L;

	
	
	public void buttonAction() 
    {
        addMessage("Welcome to Lixbox UI!!");
    }
 
    public void addMessage(String summary) 
    {
        FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_INFO, summary, null);
        FacesContext.getCurrentInstance().addMessage(null, message);
    }
}