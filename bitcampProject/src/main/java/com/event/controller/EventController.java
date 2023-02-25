package com.event.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.event.bean.EventDTO;
import com.event.service.EventService;
import com.menu.bean.MenuDTO;

@Component
@Controller
public class EventController {
	
	@Autowired
	private EventService eventService;
	
	
	@GetMapping("eventList")
	public String eventList() {//form
		return "/event/eventList";
	}
	
	@RequestMapping(value="/getEventList",method=RequestMethod.GET)
	@ResponseBody
	public EventDTO getEventList(int seqEvent) { //db데이터 //list말고 dto만
		return eventService.getEventList(seqEvent); //글번호를 넘겨줘야한다
	}
	
//	list
	@RequestMapping(value="/getBestMenuList",method=RequestMethod.GET)
	@ResponseBody
	public List<MenuDTO> getBestMenuList() { //db데이터 //list말고 dto만
		return eventService.getBestMenuList(); //글번호를 넘겨줘야한다
	}
	
}
