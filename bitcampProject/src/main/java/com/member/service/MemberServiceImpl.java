package com.member.service;

import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.member.bean.MemberDTO;
import com.member.dao.MemberDAO;
import com.member.membercontroller.MemberController;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.internet.MimeMessage;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	private MemberDAO memberDAO;
	@Autowired
	private HttpSession session;

	@Override
	public void memberwrite(MemberDTO memberDTO) {
		System.out.println("이건 1번 ");
		//DB
		memberDTO.setEmail(memberDTO.getEmail1()+"@"+memberDTO.getEmail2());
		memberDTO.setTel(memberDTO.getTel1()+memberDTO.getTel2()+memberDTO.getTel3());
		memberDAO.memberwrite(memberDTO);
	}

	@Override
	public String isExistId(String id) {
		//DB
		MemberDTO memberDTO = memberDAO.getMember2(id);
		
		if(memberDTO == null)
			return "non_exist";
		else 
			return "exist";
	}

	@Override
	public String memberlogin(MemberDTO memberDTO) {
		System.out.println("여기도 들어오냐 ");

		//DB
		MemberDTO memberDTO2 = memberDAO.getMember(memberDTO); //아이디와 일치하는 DAO 모두를 가져온다.
		
		//응답
		if(memberDTO2 == null) {
			return "non_exist";   // 아이디 입력 칸 공백
		}
		else {
			session.setAttribute("name", memberDTO2.getName()); //가져온 DAO중 Name만 빼서 name으로 login.js에 뿌려준다.
			return "exist,"+memberDTO2.getAdminNum();  //로그인 성공
		}

	}

	@Override
	public String getId(String email) {
		return memberDAO.getId(email);
	}

	@Override
	public String getPwd(String email) {
		return memberDAO.getPwd(email);
	}

}


