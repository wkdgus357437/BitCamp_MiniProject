package com.other.dao;

import com.member.bean.MemberDTO;

public interface OtherDAO {
	public void delete(String memberId)throws Exception;
	
	public void update(MemberDTO userDTO);
}
