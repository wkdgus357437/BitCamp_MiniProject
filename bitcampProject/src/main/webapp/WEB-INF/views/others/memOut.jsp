<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>BitCafe</title>
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/bottomTab.css"><!-- reset, bottomTab.css -->
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/memOut.css"><!-- reset, bottomTab.css -->
<link rel="icon" href="/bitcafe/resources/img/order.png">
</head>
<body>
<div class="container" ><!-- container start -->

	<input type="hidden" id="hidden_Id" value="${sessionScope.userId }"/><!-- value에 받아오는 세션 값 넣기 -->
	<div class="top-img"></div>
		<div class="title">
			<h2>Membership</h2>
			<h1>Withdrawal</h1>
		</div>
	<table cellpadding="5" cellspacing="0">
		<tr>
			<th colspan="2">
			<br/>
			</th>
		</tr>
		<tr>
			<th colspan="2">
			<br/>
			</th>
		</tr>
		<tr>
			<th colspan="2">비밀번호</th>
		</tr>
		<tr>
			<td colspan="2">
				<input type="password" name="pwd" size="40" id="pwd" size="40" class="inputpwd">
				<span id="false_pwd">비밀번호가 일치하지 않습니다.</span>
				<div id="pwdDiv"></div>
			</td>
		</tr>
		<tr>
			<th colspan="2">
			<br/>
			</th>
		</tr>
		<tr>
			<td colspan="2">
				<div id="button_position">
					<input type="button" id="Btn" value="회원탈퇴" />
					<input type="button"  id="reset"  onClick="location.href='/bitcafe'" value="취소"/>
				</div>
			</td>
		</tr>
	</table>
</div><!-- container end -->
   <%@ include file="../bottomTab.jsp" %><!-- bottomTab.jsp -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/memOut.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->
</body>
</html>