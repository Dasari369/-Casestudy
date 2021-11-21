package com.sonata.demo;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.sonata.demo.DefaultUserValidation;

@Controller
public class LoginController {
	@Autowired
	ValidateUserInterface validate;
	@RequestMapping(value="/login",method=RequestMethod.GET)
	public String validateUser(@RequestParam("username") String username,@RequestParam("password") String password,Model model) throws SQLException
	{
		boolean check = validate.validateUser(username, password);
		if(check == true)
		{
			return "Welcome";
		}
		else
		{
			model.addAttribute("msg", "please enter valid name and password");
			return "login";
		}
	}
	
	@RequestMapping("/login")
	public String showLogin()
	{
		return "login";
	}
    

}
