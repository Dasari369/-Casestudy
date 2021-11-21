package com.sonata.demo;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sonata.demo.DBconnection;
import com.sonata.demo.ValidateUserInterface;

@Component
public class DefaultUserValidation implements ValidateUserInterface {


	@Autowired
	DBconnection db;
	
	boolean c;

	@Override
	public boolean validateUser(String Username, String password) throws SQLException 
	{    
		
		PreparedStatement ps1 = db.getConnection().prepareStatement("select username,password from user where username=?");
		ps1.setString(1, Username);
		ResultSet rs = ps1.executeQuery();
		while(rs.next())
		{

		    if(Username.equals(rs.getString(1)) && password.equals(rs.getString(2)))
		    {
	            System.out.println("Login Successful !!!!!");
		    	 c= true;
		    }
		  
		       else
		       {
		        System.out.println("Login failed !! Please Enter Valid Username and Password...");
		       c=false;
		       }
		       
		     
		}

		  return c;
      
	}
}


