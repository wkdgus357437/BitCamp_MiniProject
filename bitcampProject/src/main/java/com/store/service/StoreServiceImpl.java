package com.store.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.store.bean.StoreDTO;
import com.store.dao.StoreDAO;

@Service
public class StoreServiceImpl implements StoreService {
	
	@Autowired
	private StoreDAO storeDAO;

	@Override
	public List<StoreDTO> getStoreList(String keyword) {
		return storeDAO.getStoreList(keyword);
	}

}
