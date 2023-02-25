<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>BitCafe</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/cart.css"><!-- reset, bottomTab.css -->
<link rel="icon" href="/bitcafe/resources/img/order.png">
</head>
<body>
<div class="container" ><!-- container start -->
	<form id="orderMenuForm" method="post">
		<input type="hidden" id="id" name="id" value="${userId }"> <!-- member id -->
		<input type="hidden" id="orderGroup" name="orderGroup" value="${param.orderGroup }">
		
		<div class="row" id="storeList_head">
			<div class="col">
				<div class="storeViewHead" id="categoryHead">결제하기</div>
			</div>
		</div>
		<br>
		<div id="order-list_start">주문 내역</div>	
		<br>
		<div id="store-info">
			<div id="storeName"></div>
		</div>
		
		<div style="overflow-y: scroll; overflow-x:hidden; " id="scroll_list_order" class="scroll_list1">
			<div id="order-list">
				<!-- ajax -->
			</div>
		</div>
	</form>
</div>
<!-- container end -->

		<!-- bottom -->
		<div id="orderMenuForm_bottom">
		<div class="row" style="width: 90%; margin: auto;">
			<div class="col" id="totalPrice_div" style="text-align: right; padding-top: 5px;">최종 결제 금액</div><br>
			<div class="col" id="totalPrice" style="padding: 0;"></div><br>
		</div>
			<div class="row" style="width: 330px; margin: auto; text-align: center;">	
				<input type="button" class="orderMenuBtn" id="orderMenuBtn" value="">  
			</div>
		</div>

	<%@ include file="bottomTab.jsp" %><!-- bottomTab.jsp -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->
<script type="text/javascript" src="/bitcafe/resources/js/orderMenu.js"></script>

</body>
</html>