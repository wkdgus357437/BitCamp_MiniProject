package com.store.dao;

import java.util.List;

import com.store.bean.StoreDTO;

public interface StoreDAO {

	public List<StoreDTO> getStoreList(String keyword);

}
