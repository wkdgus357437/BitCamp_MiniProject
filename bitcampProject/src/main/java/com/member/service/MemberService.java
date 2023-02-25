package com.member.service;

import javax.servlet.http.HttpSession;

import com.member.bean.MemberDTO;

public interface MemberService {

	public void memberwrite(MemberDTO memberDTO);

	public String isExistId(String id);

	public String memberlogin(MemberDTO memberDTO);

	public String getId(String email);
	
	public String getPwd(String email);






}
