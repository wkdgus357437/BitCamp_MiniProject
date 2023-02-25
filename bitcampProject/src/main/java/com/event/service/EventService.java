package com.event.service;

import java.util.List;

import com.event.bean.EventDTO;
import com.menu.bean.MenuDTO;

public interface EventService {
	public EventDTO getEventList(int seqEvent);

	public List<MenuDTO> getBestMenuList();

}
