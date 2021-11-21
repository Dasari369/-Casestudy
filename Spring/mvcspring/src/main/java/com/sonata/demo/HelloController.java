package com.sonata.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloController {
	@RequestMapping("/hello")
    public String sayHello(Model model) {             
        model.addAttribute("msg", "Hello Ganesh");       
        return "hello";
    }
	
	@RequestMapping("/contactlist")
	public ModelAndView getContact() {
		ModelAndView mav = new ModelAndView("contact");
		mav.addObject("con","dasari.devika@sonata-software.com");
		return mav;
		
	}
}
