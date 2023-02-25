<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>매장목록</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/store/store.css"><!-- reset, bottomTab.css -->
<link rel="icon" href="/bitcafe/resources/img/order.png">
</head>
<body>
<div class="container" ><!-- container start -->
	<div class="row" id="storeList_head">
		<div class="col-2" id="storeList_head_goback"><img alt="goback" src="../resources/img/goback.png" id="goback_icon"></div>
		<div class="col-8"><div class="storeViewHead">매장 선택</div></div>
	</div>
	<div class="input-group mb-3" id="search_DIV">
  		<span class="input-group-text" id="inputGroup-sizing-default"><img alt="findicon" src="../resources/img/findicon.png" width="30px;" height="30px;"></span>
  		<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="검색">
  		<button class="btn btn-outline-secondary" type="button" id="button-addon2">Enter</button>
	</div>
	
	<hr id="store_List_hr1">
	
	<!-- 매장리스트 for_each -->
	
	<div class="row" id="store_List">
		<div class="col-4" align="center">
			<img src="../resources/img/testShop1.jpeg" class="rounded float-start" alt="store1" id="store_thumb">
		</div>
		<div class="col" id="store_info">
			<div id="store_name">매장이름123</div>
			<div id="store_addr">매장주소123 서울시123</div>
			<div id="store_tel"><img src="../resources/img/phone1.jpg" alt="phone1" width="20px" height="20px" id="phone_img">02-123-1234</div>
			
		</div>
	</div>
</div><!-- container end -->






	<%@ include file="../bottomTab.jsp" %><!-- bottomTab.jsp -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->
</body>
</html>