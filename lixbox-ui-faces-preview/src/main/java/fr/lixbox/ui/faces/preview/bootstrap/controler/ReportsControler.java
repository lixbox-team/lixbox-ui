package fr.lixbox.ui.faces.preview.bootstrap.controler;

import java.io.Serializable;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

@Named("reportsControler")
@SessionScoped
public class ReportsControler implements Serializable
{
	private static final long serialVersionUID = 8963557984111096788L;
	private String reports;
    
        
    
    public String viewReport(String type)
    {        
        reports = type;        
        return "/pages/reports.xhtml";
    }



    public String getReports()
    {
        return reports;
    }
    public void setReports(String reports)
    {
        this.reports = reports;
    }
}