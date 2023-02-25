package com.order.service;

import java.util.List;
import java.util.Map;

import com.order.bean.ApproveResponse;
import com.order.bean.OrderDTO;
import com.order.bean.ReadyResponse;

public interface OrderService {

	public List<OrderDTO> getOrderMenu(int orderGroup);

	//public String kakaoPayReady(Map<String,Object> map);
	
	//public KakaoPayApprovalVO kakaoPayInfo(String pg_token);

	public List<OrderDTO> getCartList(String id);

	public List<OrderDTO> getUserStore(String id);

	public void orderList(Map<String, Object> map);

	public List<OrderDTO> getSelectCartList(Map<String, Object> map);

	public ReadyResponse payReady(int orderGroup);

	public ApproveResponse payApprove(String pgToken, int orderGroup);

	public void deleteSingleOrder(int seqOrder);

	public void deleteSomeOrder(Map<String, Object> map);

	public void paymentComplete(int orderGroup);


}
