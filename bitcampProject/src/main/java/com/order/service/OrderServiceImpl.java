package com.order.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.DefaultResponseErrorHandler;
import org.springframework.web.client.RestTemplate;

import com.order.bean.ApproveResponse;
import com.order.bean.OrderDTO;
import com.order.bean.ReadyResponse;
import com.order.dao.OrderDAO;

@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderDAO orderDAO;
	@Autowired
	private HttpSession session;
	private ReadyResponse readyResponse;
	private ApproveResponse approveResponse;
	
	@Override
	public List<OrderDTO> getOrderMenu(int orderGroup) {
		return orderDAO.getOrderMenu(orderGroup);
	}
	
	@Override
	public ReadyResponse payReady(int orderGroup) {
		List<OrderDTO> list = orderDAO.getOrderMenu(orderGroup);
		String[] orderNames = new String[list.size()];
		int qty = 0;
		int totalPrice = 0;
		
		for(OrderDTO orderDTO: list) {
			for(int i=0; i< list.size(); i++) {
				orderNames[i] = orderDTO.getMenuName();
				qty += orderDTO.getQty();
				totalPrice += Integer.parseInt(orderDTO.getOrderPrice());
			}
		}
		
		String itemName = null;
		if(list.size() > 1) {
			itemName = orderNames[0] + " 그외" + (list.size()-1);
		} else {
			itemName = orderNames[0];
		}
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "KakaoAK " + "097e6a1dc07daceb361d2f88ca3fa5fe");
		headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
		headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
		
		MultiValueMap<String, Object> parameters = new LinkedMultiValueMap<String, Object>();
		parameters.add("cid", "TC0ONETIME");
		parameters.add("partner_order_id", orderGroup);
		parameters.add("partner_user_id", session.getAttribute("userId")); //세션 아이디로 바꿔주기
		parameters.add("item_name", itemName);
		parameters.add("quantity", qty);
		parameters.add("total_amount", totalPrice);
		parameters.add("tax_free_amount", "0");
		parameters.add("approval_url", "http://localhost:8080/bitcafe/completed?orderGroup=" + orderGroup);
		parameters.add("cancel_url", "http://localhost:8080/bitcafe/cancel");
		parameters.add("fail_url", "http://localhost:8080/bitcafe/fail");
		
		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(parameters, headers);
		
		RestTemplate restTemplate = new RestTemplate();
		restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory());
		restTemplate.setErrorHandler(new DefaultResponseErrorHandler() {
			public boolean hasError(ClientHttpResponse response) throws IOException {
				HttpStatus statusCode = response.getStatusCode();
				return statusCode.series() == HttpStatus.Series.SERVER_ERROR;
			}
		});
		
		String url = "https://kapi.kakao.com/v1/payment/ready";

		readyResponse = restTemplate.postForObject(url, requestEntity, ReadyResponse.class);
		System.out.println("결재준비 응답객체: " + readyResponse);
	        
		return readyResponse;
  
	}
	
	@Override
	public ApproveResponse payApprove(String pgToken, int orderGroup) {
		MultiValueMap<String, Object> parameters = new LinkedMultiValueMap<String, Object>();
		parameters.add("cid", "TC0ONETIME");
		parameters.add("tid", readyResponse.getTid());
		parameters.add("partner_order_id", orderGroup);
		parameters.add("partner_user_id", session.getAttribute("userId")); //세션 아이디값으로 변경해주기
		parameters.add("pg_token", pgToken);
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "KakaoAK " + "097e6a1dc07daceb361d2f88ca3fa5fe");
		headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
		headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
		
		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(parameters, headers);
		
		RestTemplate restTemplate = new RestTemplate();
		restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory());
		restTemplate.setErrorHandler(new DefaultResponseErrorHandler() {
			public boolean hasError(ClientHttpResponse response) throws IOException {
				HttpStatus statusCode = response.getStatusCode();
				return statusCode.series() == HttpStatus.Series.SERVER_ERROR;
			}
		});
		
		String url = "https://kapi.kakao.com/v1/payment/approve";
		
		approveResponse = restTemplate.postForObject(url, requestEntity, ApproveResponse.class);
		System.out.println("결재승인 응답객체: " + approveResponse);
			
		return approveResponse;
		
	}
	
	@Override
	public List<OrderDTO> getCartList(String id) {
		return orderDAO.getCartList(id);
	}

	@Override
	public List<OrderDTO> getUserStore(String id) {
		return orderDAO.getUserStore(id);
	}

	@Override
	public void orderList(Map<String, Object> map) {
		orderDAO.orderList(map);
	}

	@Override
	public List<OrderDTO> getSelectCartList(Map<String, Object> map) {
		return orderDAO.getSelectCartList(map);
	}

	@Override
	public void deleteSingleOrder(int seqOrder) {
		orderDAO.deleteSingleOrder(seqOrder);
	}

	@Override
	public void deleteSomeOrder(Map<String, Object> map) {
		orderDAO.deleteSomeOrder(map);
	}

	@Override
	public void paymentComplete(int orderGroup) {
		orderDAO.paymentComplete(orderGroup);
	}

	
}
