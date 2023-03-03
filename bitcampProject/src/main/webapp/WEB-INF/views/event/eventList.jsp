<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>BitCafe</title>
<link rel="stylesheet" type="text/css"
	href="/bitcafe/resources/css/bottomTab.css">
<link rel="icon" href="/bitcafe/resources/img/order.png">
<style type="text/css">
#eventListTable{
font-size: 15px;
width:100%;
border: none;
}
#eventListTable img{
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
}

</style>
</head>

<body>
	<!-- container -->
	<div class="container">
	<input type="hidden" id="seqEvent_hidden" value="${param.seqEvent }">
		<table id="eventListTable" cellpadding="5" frame="void"
			rules="none"> <!-- rules밑으로 선 없애기 -->
			
			<tr>
			<td><img src="/bitcafe/resources/img/beanLogo.png" style="width:350px; height: 35px;"></td>
			</tr>
			
			<tr>
				<td style="width:250px; height:80px; font-size: 1.5em;"><span id="eventNameSpan"></span></td>
			</tr>
			
			<tr>
				<td style="width:250px; height:80px; font-size: 1.2em;"><span id="eventContentSpan"></span></td>
			</tr>
			
			<tr>
				<td><span id="eventImgSpan"></span></td>
			</tr>
			
		</table>
	</div>
	
	<!-- container end -->

	<%@ include file="../bottomTab.jsp"%><!-- bottomTab.jsp -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
	<script type="text/javascript" src="/bitcafe/resources/js/event.js"></script><!-- event.js -->
	<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->
</body>
</html>