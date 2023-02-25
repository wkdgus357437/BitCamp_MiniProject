package com.admin.dao;


import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.menu.bean.MenuDTO;
import com.order.bean.OrderDTO;


@Repository
@Transactional//commit과 close 담당
public class AdminDAOImpl implements AdminDAO {
	@Autowired
	private SqlSession sqlSession;

	@Override
	public OrderDTO getOrder() {
		return sqlSession.selectOne("adminSQL.getOrder");
	}

	@Override
	public void menuWrite(MenuDTO menuDTO) {
		sqlSession.insert("adminSQL.menuWrite", menuDTO);
	}

	@Override
	public List<MenuDTO> menuLoad(String categoryNum) {
		return sqlSession.selectList("adminSQL.menuLoad", categoryNum);
	}

	@Override
	public void menuErase(int seqMenu) {
		sqlSession.delete("adminSQL.menuEarase", seqMenu);
	}

	@Override
	public MenuDTO menuUpdateForm(int seqMenu) {
		return sqlSession.selectOne("adminSQL.menuUpdateForm", seqMenu);
	}

	@Override
	public String orderAlert(String id) {
		OrderDTO orderDTO = sqlSession.selectOne("adminSQL.orderAlert", id);
		
		if(orderDTO != null) {
			return "alert";
		}else return "null";
	}

	@Override
	public void menuUpdate(MenuDTO menuDTO) {
		sqlSession.update("adminSQL.menuUpdate", menuDTO);
	}

	@Override
	public List<OrderDTO> orderLoad(String id) {
		return sqlSession.selectList("adminSQL.orderLoad", id);
	}

	@Override
	public void orderConfirm(int orderGroup) {
		sqlSession.update("adminSQL.orderConfirm", orderGroup);
	}

	@Override
	public void orderComplete(int orderGroup) {
		sqlSession.update("adminSQL.orderComplete", orderGroup);
	}

	@Override
	public void orderReject(int orderGroup) {
		sqlSession.update("adminSQL.orderReject", orderGroup);
	}

	@Override
	public List<OrderDTO> orderSales(int selectNum, String id) {
		if(selectNum == 1){
			return sqlSession.selectList("adminSQL.orderSales1", id);
		}else if(selectNum == 2){
			return sqlSession.selectList("adminSQL.orderSales2", id);
		}else {
			return sqlSession.selectList("adminSQL.orderSales3", id);
		}
	}
}