<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>category</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/store/menu.css"><!-- reset, bottomTab.css -->
<link rel="icon" href="/bitcafe/resources/img/order.png">
</head>
<body>
<div id="box_wrap">	
<div class="container" ><!-- container start -->
	<header id="menuHeader">
			<div class="row" id="storeList_head">
			<input type="hidden" value="${param.categoryNum }" id="categoryNum_hidden">
			<div class="col-2" id="storeList_head_goback" onclick="goback_store_info()"><img alt="goback" src="/bitcafe/resources/img/goback.png" id="goback_icon"></div>
			<div class="col-8"><div class="storeViewHead" id="categoryHead">${param.categoryName }</div></div>
		</div>
	</header>
	<div id="menuStart">

	</div>
</div><!-- container end -->
</div>
	<%@ include file="bottomTab.jsp" %><!-- bottomTab.jsp -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->
<script type="text/javascript" src="/bitcafe/resources/js/menu.js"></script>
</body>
</html>