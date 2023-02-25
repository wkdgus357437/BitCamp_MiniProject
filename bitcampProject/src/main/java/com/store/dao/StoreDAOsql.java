package com.store.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.store.bean.StoreDTO;

@Repository
@Transactional
public class StoreDAOsql implements StoreDAO {
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<StoreDTO> getStoreList(String keyword) {
		return sqlSession.selectList("storeSQL.getStoreList", keyword);
	}

}
