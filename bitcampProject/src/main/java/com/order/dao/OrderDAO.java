package com.order.dao;

import java.util.List;
import java.util.Map;

import com.order.bean.OrderDTO;

public interface OrderDAO {

	public List<OrderDTO> getOrderMenu(int orderGroup);

	public List<OrderDTO> getCartList(String id);

	public List<OrderDTO> getUserStore(String id);

	public void orderList(Map<String, Object> map);

	public List<OrderDTO> getSelectCartList(Map<String, Object> map);

	public void deleteSingleOrder(int seqOrder);

	public void deleteSomeOrder(Map<String, Object> map);

	public void paymentComplete(int orderGroup);

}
