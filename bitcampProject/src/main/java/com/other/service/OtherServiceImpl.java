package com.other.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.member.bean.MemberDTO;
import com.member.dao.MemberDAO;

@Service                                                    
public class OtherServiceImpl implements OtherService {
	@Autowired
	private MemberDAO memberDAO;
	
	@Override
	public void delete(String memberId){
		
	}
	
	@Override
	public void memberDelete(String id) {

		memberDAO.memberDelete(id);
	}

	@Override
	public MemberDTO checkPwd(Map<String, Object> map) {
		return memberDAO.checkPwd(map);
	}



	@Override
	public MemberDTO update(String ssId) {
		return memberDAO.update(ssId);
	}

	@Override
	public void updateGo(MemberDTO memberDTO) {
		memberDAO.updateGo(memberDTO);
	}

}
