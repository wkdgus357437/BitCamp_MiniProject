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
	
	
	// 이벤트 리스트	
	@Override
	public EventDTO getEventList(int seqEvent) {
	
		return eventDAO.getEventList(seqEvent);
	}

	// 베스트 메뉴 리스트	
	@Override
	public List<MenuDTO> getBestMenuList() {
		
		return eventDAO.getBestMenuList();
	}

	
}
