package com.member.dao;

import java.util.Map;

import javax.servlet.http.HttpSession;

import com.member.bean.MemberDTO;

public interface MemberDAO {
	
	public void memberwrite(MemberDTO memberDTO);

	public MemberDTO getMember(MemberDTO memberDTO);
	
	public MemberDTO memberlogin(MemberDTO memberDTO);

	public String getId(String email);
	
	public String getPwd(String email);

	public void memberDelete(String id);

	public MemberDTO checkPwd(Map<String, Object> map);

	public MemberDTO update(String ssId);

	public void updateGo(MemberDTO memberDTO);

	public MemberDTO getMember2(String id);
}
