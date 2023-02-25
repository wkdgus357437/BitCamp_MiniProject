package com.admin.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.admin.dao.AdminDAO;
import com.menu.bean.MenuDTO;
import com.order.bean.OrderDTO;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminDAO adminDAO;

	@Override
	public OrderDTO getOrder() {
		//System.out.println(adminDAO.getOrder().getOrderPrice());
		return adminDAO.getOrder();
	}

	@Override
	public void menuWrite(MenuDTO menuDTO) {
		adminDAO.menuWrite(menuDTO);
	}

	@Override
	public List<MenuDTO> menuLoad(String categoryNum) {
		return adminDAO.menuLoad(categoryNum);
	}

	@Override
	public void menuErase(int seqMenu) {
		adminDAO.menuErase(seqMenu);
	}

	@Override
	public MenuDTO menuUpdateForm(int seqMenu) {
		return adminDAO.menuUpdateForm(seqMenu);
	}

	@Override
	public String orderAlert(String id) {
		return adminDAO.orderAlert(id);
	}

	@Override
	public void menuUpdate(MenuDTO menuDTO) {
		adminDAO.menuUpdate(menuDTO);
	}

	@Override
	public List<OrderDTO> orderLoad(String id) {
		return adminDAO.orderLoad(id);
	}

	@Override
	public void orderConfirm(int orderGroup) {
		adminDAO.orderConfirm(orderGroup);
	}

	@Override
	public void orderComplete(int orderGroup) {
		adminDAO.orderComplete(orderGroup);
	}

	@Override
	public void orderReject(int orderGroup) {
		adminDAO.orderReject(orderGroup);
	}

	@Override
	public List<OrderDTO> orderSales(int selectNum, String id) {
		return adminDAO.orderSales(selectNum, id);
	}
}
