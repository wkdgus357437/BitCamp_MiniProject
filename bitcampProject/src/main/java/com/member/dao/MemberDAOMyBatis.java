package com.member.dao;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.member.bean.MemberDTO;

@Repository
@Transactional
public class MemberDAOMyBatis implements MemberDAO {
	@Autowired
	private SqlSession sqlSession;

	@Override
	public void memberwrite(MemberDTO memberDTO) {
		System.out.println("이건 2번");
		sqlSession.insert("memberSQL.memberwrite", memberDTO);
	}

	@Override
	public MemberDTO getMember(MemberDTO memberDTO) {
		return sqlSession.selectOne("memberSQL.getMember", memberDTO);	
	}

	@Override
	public MemberDTO memberlogin(MemberDTO memberDTO) {
		return sqlSession.selectOne("memberSQL.memberlogin", memberDTO);	
	}


	@Override
	public String getId(String email) {
		return sqlSession.selectOne("memberSQL.getId", email);
	}

	@Override
	public String getPwd(String email) {
		return sqlSession.selectOne("memberSQL.getPwd", email);
	}

	public void memberDelete(String id) {

		sqlSession.delete("memberSQL.memberDelete", id);
	}

	@Override
	public MemberDTO checkPwd(Map<String, Object> map) {

		return sqlSession.selectOne("memberSQL.checkPwd", map);
	}

	@Override
	public MemberDTO update(String ssId) {
		MemberDTO memberDTO = sqlSession.selectOne("memberSQL.update", ssId);
		String email = memberDTO.getEmail();
		String tel = memberDTO.getTel();
		
		int idx= email.indexOf("@");
		
		String email1 = email.substring(0, idx);
		String email2 = email.substring(idx+1);
		memberDTO.setEmail1(email1);
		memberDTO.setEmail2(email2);
		
		String tel1;
		String tel2;
		String tel3;
		if(tel.length() == 11) {
			tel1 = tel.substring(0, 3);
			tel2 = tel.substring(3, 7);
			tel3 = tel.substring(7);
			memberDTO.setTel1(tel1);
			memberDTO.setTel2(tel2);
			memberDTO.setTel3(tel3);
		}else if(tel.length() == 10) {
			tel1 = tel.substring(0, 3);
			tel2 = tel.substring(3, 6);
			tel3 = tel.substring(6);
			memberDTO.setTel1(tel1);
			memberDTO.setTel2(tel2);
			memberDTO.setTel3(tel3);
		}
		return memberDTO;
	}

	@Override
	public void updateGo(MemberDTO memberDTO) {
		memberDTO.setEmail(memberDTO.getEmail1()+"@"+memberDTO.getEmail2());
		memberDTO.setTel(memberDTO.getTel1()+memberDTO.getTel2()+memberDTO.getTel3());
		
		sqlSession.update("memberSQL.updateGo", memberDTO);
	}
	
	@Override
	public MemberDTO getMember2(String id) {
		return sqlSession.selectOne("memberSQL.getMember2", id);	
	
	}



}
