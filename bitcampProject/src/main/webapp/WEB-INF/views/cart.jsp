<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>cart</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/cart.css"><!-- reset, bottomTab.css -->
<link rel="icon" href="/bitcafe/resources/img/order.png">
<style type="text/css">
/* #cart-head, .cart-list-row-top, .menu-options-price {
   display: flex;
    justify-content: space-between;
} */
</style>
</head>
<body>

	<div class="container" ><!-- container start -->
		<input type="hidden" id="id" value="${userId }">
		<!-- 머리 -->
		
			<div class="row" id="storeList_head">
				<div class="col-2" id="storeList_head_goback" onclick="goback_store_info()"><img alt="goback" src="/bitcafe/resources/img/goback.png" id="goback_icon"></div>
				<div class="col-8"><div class="storeViewHead" id="categoryHead">장바구니</div></div>
			</div>
			<div id="select_option_div">
				<select class="form-select form-select-lg mb-3" aria-label="Default select example" id="selectStore">
					<option selected>결제를 진행할 매장을 선택해 주세요.</option>
					<!-- ajax (선택 시 seqStore 저장 ) -->
				</select>
			</div>
			<div id="select_box_all">주문 메뉴</div>
			<div class="row" id="select_box_start">
				<div class="col-5" id="checked_allMenu">
					<input class="form-check-input" type="checkbox" value="" id="checkAll">
  					<label class="form-check-label" for="flexCheckDefault" id="all_checked">전체 선택</label>
				</div>
				<div class="col-7" id="check_other">
					<input type="button" id="deleteAllBtn" value="전체삭제"> |
					<input type="button" id="deleteSomeBtn" value="선택삭제">
				</div>
			</div>
		
		
		<div style="overflow-y: scroll; overflow-x:hidden; " id="scroll_list" class="scroll_list1">
			<div id="cart-list">
				<!-- ajax -->
			</div>
		</div>
		
		<input class="btn btn-primary" id="orderListBtn" type="button" value="주문하기">
		
	</div><!-- container end -->

	
   <%@ include file="bottomTab.jsp" %><!-- bottomTab.jsp -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->
<script type="text/javascript" src="/bitcafe/resources/js/cart.js"></script>
</body>
</html>