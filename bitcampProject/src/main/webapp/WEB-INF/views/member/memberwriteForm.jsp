<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>BitCafe</title>

<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/bottomTab.css"><!-- reset, bottomTab.css -->
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/member/memberwriteFormCss.css">
<link rel="icon" href="/bitcafe/resources/img/order.png">

</head>
<body>

<!-- container start -->
<div class="container" >
	<form name="writeForm" id="writeForm" method="post" align="left" action="" style="cursor: pointer;">
	<div id="login-img-01"><!--로그인 Bit Cafe img  -->
	<a href="/bitcafe/index/"><img src="/bitcafe/resources/img/loginimg/login-img.png"></a></div>
	<table border="0" cellpadding="5" cellspacing="0">
	
		<tr>
			<th class="memberwrite" style="margin: 0 auto; font-size: 15px;" align="center">Name</th>
			<td>
				<input type="text" id="name" name="name" maxlength="10" placeholder="이름 입력"/>
				<div id="nameDiv"></div>
			</td>
		</tr>
		
		<tr>
			<th style="margin: 0 auto; font-size: 15px;" align="center">Id</th>
			<td>
				<input type="text" id="id" name="id" maxlength="15" placeholder="아이디 입력"/>
				<div id="idDiv" style="margin: 0 auto; font-size: 10px;" ></div>
			</td>
		</tr>
		
		<tr>
			<th style="margin: 0 auto; font-size: 15px;" align="center">Password</th>
			<td>
				<input type="password" id="pwd" name="pwd" maxlength="15" placeholder="비밀번호를 입력하세요."/>
				<div id="pwdDiv" style="margin: 0 auto; font-size: 10px;" > </div>
			</td>
		</tr>
		
		<tr>
			<th style="margin: 0 auto; font-size: 15px;" align="center">Re Password</th>
			<td>
				<input type="password" id="repwd" name="repwd" class="chk" maxlength="15" placeholder="비밀번호를 입력하세요." />
				<div id = "repwdDiv" style="margin: 0 auto; font-size: 10px;"></div>
			</td>
		</tr>
		
		<tr>
			 <th style="margin: 0 auto; font-size: 15px;" align="center">Email</th>
		     <td style="margin: 0 auto; font-size: 15px;">
				<input type="email" name="email1" id="email1" style="width: 100px;">
				@
				<input type="email" name="email2" id="email2" style="width: 100px;">
				<select id="email3" onchange="change()" style="width: 100px;">
					<option value="">직접입력</option>
					<option value="naver.com">naver.com</option>
					<option value="daum.net">daum.net</option>
					<option value="gmail.com">gmail.com</option>
				</select>
		      </td>
		</tr>
		
		<tr>
   		   <th style="margin: 0 auto; font-size: 15px;" align="center">Tel</th>
	       <td>
			   <select name="tel1" id="tel1" style="width: 60px;">
			   <option value="010">010</option>
			   <option value="011">011</option>
			   <option value="016">016</option>
			   <option value="019">019</option>
			   </select>
			   -
			   <input type="tel" name="tel2" id="tel2" style="width: 70px;" >
			   -
			   <input type="tel" name="tel3" id="tel3" style="width: 70px;" >
	       </td>
		</tr>
		
		 <tr>
	   	    <th colspan="2" align="center">
			<input type="button" id="writeBtn" value="Sign Up" >
			<input type="reset" id="RewriteBtn" value="Rewrite">
		     </th>
		 </tr>
		
	</table>
  
</form>
	
</div><!-- container end -->

<%@ include file="../bottomTab.jsp" %><!-- bottomTab.jsp -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->

<script type="text/javascript" src="/bitcafe/resources/js/write.js"></script>


<script type="text/javascript">

function change(){
	//alert(document.writeForm.email3.value);
	document.writeForm.email2.value = document.writeForm.email3.value;
}

</script>
</body>
</html>











