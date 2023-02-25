package com.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.bean.EventDTO;
import com.event.dao.EventDAO;
import com.menu.bean.MenuDTO;

@Service
public class EventServiceImpl implements EventService {
	@Autowired
	private EventDAO eventDAO;
	
	@Override
	public EventDTO getEventList(int seqEvent) {
	
		return eventDAO.getEventList(seqEvent);
	}

	@Override
	public List<MenuDTO> getBestMenuList() {
		
		return eventDAO.getBestMenuList();
	}

	
}
