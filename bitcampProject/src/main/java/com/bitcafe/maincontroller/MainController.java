package com.bitcafe.maincontroller;


import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Component
@Controller
public class MainController {
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String index() {
		return "index";
	}
	@RequestMapping(value="/cart", method=RequestMethod.GET)
	public String cart() {
		return "cart";
	}
	@RequestMapping(value="/order", method=RequestMethod.GET)
	public String order() {
		return "order";
	}
	@RequestMapping(value="/others", method=RequestMethod.GET)
	public String others() {
		return "others";
	}
	
}
