package com.store.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.store.bean.StoreDTO;
import com.store.service.StoreService;

@Component
@RequestMapping("store")
public class StoreController {

	@Autowired
	private StoreService storeService;

	@GetMapping(value = "getStoreList")
	@ResponseBody
	public List<StoreDTO> getStoreList(@RequestParam(required = false, defaultValue = "") String keyword) {

		return storeService.getStoreList(keyword);

	}

}
