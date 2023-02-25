package com.menu.dao;

import com.menu.bean.MenuDTO;
import java.util.List;

import com.menu.bean.CategoryDTO;
import com.menu.bean.MenuDTO;
import com.order.bean.OrderDTO;

public interface MenuDAO {

	public MenuDTO getMenu(int seqMenu);

	public int orderMenu(OrderDTO orderDTO);

	List<CategoryDTO> getCategory();

	public List<MenuDTO> getMenuList(int categoryNum);

	public void addCart(OrderDTO orderDTO);

}
