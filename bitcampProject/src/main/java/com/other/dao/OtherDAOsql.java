package com.other.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.member.bean.MemberDTO;

@Repository
@Transactional
public class OtherDAOsql implements OtherDAO {

	@Override
	public void delete(String memberId) throws Exception {
		//sqlsession.delete("memberMapper.delete", memberId);
		
	}

	@Override
	public void update(MemberDTO userDTO) {
		// TODO Auto-generated method stub
		
	}

}
