package com.order.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.order.bean.ApproveResponse;
import com.order.bean.OrderDTO;
import com.order.bean.ReadyResponse;
import com.order.service.OrderService;

@Controller
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	@GetMapping(value="/getUserStore")
	@ResponseBody
	public List<OrderDTO> getUserStore(@RequestParam String id) {
		return orderService.getUserStore(id);
	}
	
	@GetMapping(value="/getOrderMenu")
	@ResponseBody
	public List<OrderDTO> getOrderMenu(@RequestParam int orderGroup) {
		return orderService.getOrderMenu(orderGroup);
	}
	
	@PostMapping(value = "/orderList")
	@ResponseBody
	public void orderList(@RequestParam(value="checkedArr[]") List<Integer> checkedArr, @RequestParam String id, @RequestParam int storeNum, @RequestParam int orderGroup) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("checkedArr", checkedArr);
		map.put("id", id);
		map.put("storeNum", storeNum);
		map.put("orderGroup", orderGroup);
		orderService.orderList(map);
	}

	@PostMapping(value="/pay")
	@ResponseBody
	public ReadyResponse payReady(@RequestParam int orderGroup, Model model) {
		ReadyResponse readyResponse = orderService.payReady(orderGroup);
		System.out.println(readyResponse);
		
		return readyResponse;
	}
	
	@GetMapping(value="/completed")
	public String payCompleted(@RequestParam("pg_token") String pgToken, @RequestParam("orderGroup") int orderGroup, Model model) {
		System.out.println("kakaoPaySuccess pg_token : " + pgToken);
		
		ApproveResponse approveResponse = orderService.payApprove(pgToken, orderGroup);
		System.out.println(approveResponse);
		model.addAttribute("approveResponse", approveResponse);
		
		return "kakaoPaySuccess";
	}
	
	@GetMapping(value="/getCartList")
	@ResponseBody
	public List<OrderDTO> getCartList(@RequestParam String id){
		return orderService.getCartList(id);
	}
	
	@GetMapping(value="/getSelectCartList")
	@ResponseBody
	public List<OrderDTO> getSelectCartList(@RequestParam String id, @RequestParam int storeNum){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("storeNum", storeNum);
		return orderService.getSelectCartList(map);
	}
	
	@GetMapping(value="/deleteSingleOrder")
	@ResponseBody
	public void deleteSingleOrder(@RequestParam int seqOrder){
		orderService.deleteSingleOrder(seqOrder);
	}
	
	@GetMapping(value="/deleteSomeOrder")
	@ResponseBody
	public void deleteSomeOrder(@RequestParam(value="checkedArr[]") List<Integer> checkedArr){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("checkedArr", checkedArr);
		orderService.deleteSomeOrder(map);
	}
	
	@GetMapping(value="/paymentComplete")
	@ResponseBody
	public void paymentComplete(@RequestParam int orderGroup){
		orderService.paymentComplete(orderGroup);
	}
}
