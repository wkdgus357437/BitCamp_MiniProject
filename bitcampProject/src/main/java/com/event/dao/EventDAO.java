package com.event.dao;

import java.util.List;

import com.event.bean.EventDTO;
import com.menu.bean.MenuDTO;

public interface EventDAO {
	
	
	// 이벤트 리스트	
	public EventDTO getEventList(int seqEvent);

	// 베스트메뉴 리스트	
	public List<MenuDTO> getBestMenuList();

}
