package com.bitcafe.othercontroller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.commons.collections4.map.HashedMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.store.service.StoreService;

import com.member.bean.MemberDTO;
import com.other.service.OtherService;

@Controller
public class OtherController {
	
	  @Autowired 
	  private OtherService otherService;
	 
	/*
	 * @Autowired private StoreService storeService;
	 */

	@RequestMapping(value = "/orderList", method = RequestMethod.GET)
	public String orderList() {
		return "/others/orderList";
	}

	@RequestMapping(value = "/memOut", method = RequestMethod.GET)
	public String memOut() {
		return "/others/memOut";
	}

	@RequestMapping(value = "/updateMem", method = RequestMethod.GET)
	public String updateMem() {
		return "/others/updateMem";
	}

	@RequestMapping(value = "/logout")
	@ResponseBody
	public void logout(HttpSession session) {
		session.invalidate();
	}
	
	/*
	 * @PostMapping(value="update")
	 * 
	 * @ResponseBody public void update(@ModelAttribute MemberDTO memberDTO) {
	 * otherService.update(memberDTO); }
	 */
	@PostMapping("memberDelete")
	@ResponseBody
	public void memberDelete(@RequestParam("id") String id, HttpSession session) {
		session.invalidate();
		otherService.memberDelete(id);
	}
	
	@PostMapping(value="checkPwd")
	@ResponseBody
	public MemberDTO checkPwd(@RequestParam("ssId") String ssId, @RequestParam("ssPwd") String ssPwd) {
		
		Map<String, Object> map = new HashedMap<String, Object>();
		map.put("ssId", ssId);
		map.put("ssPwd", ssPwd);
		return otherService.checkPwd(map);
	}
	
	@PostMapping(value="update")
	@ResponseBody
	public MemberDTO update(@RequestParam String ssId) {
		
		return otherService.update(ssId);
	}
	@PostMapping(value="updateGo")
	@ResponseBody
	public void updateGO(@ModelAttribute MemberDTO memberDTO) {
		System.out.println("asdfsadf");
		otherService.updateGo(memberDTO);
	}
}
