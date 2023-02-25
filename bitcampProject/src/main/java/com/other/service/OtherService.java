package com.other.service;

import java.util.Map;

import com.member.bean.MemberDTO;

public interface OtherService {
	public void delete(String memberId);

	public void memberDelete(String id);

	public MemberDTO checkPwd(Map<String, Object> map);

	public MemberDTO update(String ssId);

	public void updateGo(MemberDTO memberDTO);

	/*
	 * public static String memberOut(String id) { // TODO Auto-generated method
	 * stub return null; }
	 */
}
