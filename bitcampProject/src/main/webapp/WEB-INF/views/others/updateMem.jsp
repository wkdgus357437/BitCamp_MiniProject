<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>BitCafe</title>
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/bottomTab.css"><!-- reset, bottomTab.css -->
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/updateMem.css"><!-- reset, bottomTab.css -->
<link rel="icon" href="/bitcafe/resources/img/order.png">
</head>
<body>
<form name="writeForm" id="writeForm">
<div class="container" ><!-- container start -->
	<input type="hidden" id="hidden_Id" value="${sessionScope.userId }"/>
		<div class="top-img"></div>
		<div class="title">
			<h1>회원정보수정</h1>
		</div>
	<table cellpadding="5" cellspacing="0">
		<br>
		<tr>
			<th colspan="2">아이디</th>
		</tr>
		<tr>
			<td colspan="2">
			 	<input type="text" name="id" id="id" size="40" readonly="readonly"><br><br>
			</td>
		</tr>
		<tr>
			<th colspan="2">이름</th>
		</tr>
		<tr>
			<td colspan="2">
				<input type="text" name="name" id="name" size="40">
				<div id="nameDiv" class="div"></div><br><br>
			</td>
		</tr>
		<tr>
			<th colspan="2">비밀번호</th>
		</tr>
		<tr>
			<td colspan="2">
				<input type="password" name="pwd" size="40" id="pwd" size="40">
				<div id="pwdDiv" class="div"></div><br><br>
			</td>
		</tr>
		<tr>
			<th colspan="2">재확인</th>
		</tr>
		<tr>
			<td colspan="2">
				<input type="password" size="40" id="repwd" size="40"><br><br>
			</td>
		</tr>
		<tr>
			<th colspan="2">이메일</th>
		</tr>
		<tr>
			<td colspan="2">
				<input type="email" name="email1" id="email1" style="width: 160px;">
				@
				<input type="email" name="email2" id="email2" style="width: 160px;">
				<select name="email3" id="email3" onchange="change()" style="width: 130px;">
					<option value="">직접입력</option>
					<option value="naver.com">naver.com</option>
					<option value="daum.net">daum.net</option>
					<option value="gmail.com">gmail.com</option>	
				</select><br/>
				<div id="emailDiv" class="div"></div><br><br>
			</td>
		</tr>
		<tr>
			<th colspan="2">휴대폰</th>
		</tr>
		<tr>
			<td colspan="2">
				<select name="tel1" id="tel1" style="width: 80px;">
					<option value="010">010</option>
					<option value="011">011</option>
					<option value="016">016</option>
					<option value="019">019</option>
				</select>
				-
				<input type="tel" name="tel2" id="tel2" style="width: 100px;">
				-
				<input type="tel" name="tel3" id="tel3" style="width: 100px;">
				<div id="telDiv" class="div"></div><br><br>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<div>
					<button type="button" id="updateBtn">회원정보수정</button>
					<button type="button"  id="resetBtn" onClick="location.href='/bitcafe/updateMem'">다시작성</button>
				</div>
			</td>
		</tr>
	</table>
</div><!-- container end -->
	</form>
	<%@ include file="../bottomTab.jsp" %><!-- bottomTab.jsp -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->
<script type="text/javascript" src="/bitcafe/resources/js/updateMem.js"></script>
<script type="text/javascript">

function change(){
	document.writeForm.email2.value = document.writeForm.email3.value;
}

</script>
</body>
</html>