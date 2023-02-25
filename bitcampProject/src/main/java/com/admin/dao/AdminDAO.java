package com.admin.dao;

import java.util.List;

import com.menu.bean.MenuDTO;
import com.order.bean.OrderDTO;

public interface AdminDAO {

	public OrderDTO getOrder();
	
	public void menuWrite(MenuDTO menuDTO);

	public List<MenuDTO> menuLoad(String categoryNum);

	public void menuErase(int seqMenu);

	public MenuDTO menuUpdateForm(int seqMenu);

	public String orderAlert(String id);

	public void menuUpdate(MenuDTO menuDTO);

	public List<OrderDTO> orderLoad(String id);

	public void orderConfirm(int orderGroup);

	public void orderComplete(int orderGroup);

	public void orderReject(int orderGroup);

	public List<OrderDTO> orderSales(int selectNum, String id);

}
