package com.event.dao;

import java.util.List;

import com.event.bean.EventDTO;
import com.menu.bean.MenuDTO;

public interface EventDAO {
	
	public EventDTO getEventList(int seqEvent);

	public List<MenuDTO> getBestMenuList();

}
