<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>BitCafe</title>

<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/bottomTab.css"><!-- reset, bottomTab.css -->
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/member/loginFormCss.css">
<link rel="icon" href="/bitcafe/resources/img/order.png">

</head>
<body>

<!-- container start -->
<div class="container" >
	<!-- <div id="topImg" style="width:100%; height:370px;">img</div>  여기 있는건 topImg.css로 옮겼음-->


	<form name="loginForm" id="loginForm" method="post" align="left" action="" style="cursor: pointer;" >
	<div id="login-img-01"><!--로그인 Bit Cafe img  -->
	<a href="/bitcafe/index/"><img src="/bitcafe/resources/img/loginimg/login-img.png"></a></div>
	<table border="0" cellpadding="5" cellspacing="0"  >
		
		<tr>
			<th style="margin: 0 auto; font-size: 15px;" align="center">ID</th>
			<td>
				&nbsp;<input type="text" id="id" name="id" maxlength="15" placeholder="아이디 입력" />
				<div id="idDiv" style="margin: 0 auto; font-size: 10px;" ></div>
			</td>
		</tr>
		
		<tr>
			<th style="margin: 0 auto; font-size: 15px;" align="center">Password</th>
			<td>
				&nbsp;<input type="password" id="pwd" name="pwd" maxlength="15" placeholder="비밀번호를 입력" />
				<div id="pwdDiv" style="margin: 0 auto; font-size: 10px;" > </div>
			</td>
		</tr>
		<tr>

	   	    <th colspan="2" align="center">
			<input type="button" id="loginBtn" value="로그인"  >
			<input type="button" id="writeFormBtn" value="회원가입" onClick="location.href='/bitcafe/memberwriteForm'">
		    </th>
		</tr>
	
		<tr>
			<th colspan="2" align="center">
			<input type="button" id="loginSNSBtn" value="Kakao 로그인" >
			</th>
		</tr>
		
		<tr>
			<th colspan="2" align="center">
			<input type="button" id="memberIdSearchBtn" value="아이디 찾기" onClick="location.href='/bitcafe/memberIdSearch'">
			<input type="button" id="memberPwdSearchBtn" value="비밀번호 찾기" onClick="location.href='/bitcafe/memberPwdSearch'">
		</tr>
		
		
	</table>
  
</form>	
	
	
	
</div><!-- container end -->



<%@ include file="../bottomTab.jsp" %><!-- bottomTab.jsp -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->

<script type="text/javascript" src="/bitcafe/resources/js/login.js"></script>

<script src = "https://developers.kakao.com/sdk/js/kakao.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/loginSNS.js"></script><!-- 카카오 로그인 api -->

</body>
</html>