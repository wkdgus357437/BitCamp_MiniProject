package com.store.service;

import java.util.List;

import com.store.bean.StoreDTO;

public interface StoreService {

	public List<StoreDTO> getStoreList(String keyword);
	
}
