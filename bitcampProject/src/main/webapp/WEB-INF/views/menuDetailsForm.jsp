<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>BitCafe</title>
<!-- bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/menuDetails.css">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/bottomTab.css"><!-- reset, bottomTab.css -->
<link rel="icon" href="/bitcafe/resources/img/order.png">
</head>
<body>
<div class="container" ><!-- container start -->
	<div class="row" id="menuDetails_head">
		<div class="col-2" id="menuDetails_head_goback" onclick="goback_store_info()"><img alt="goback" src="/bitcafe/resources/img/goback.png" id="goback_icon"></div>
		<div class="col-8"><div class="menuDetailsViewHead"></div></div>
	</div>

   <form id="menuDetailsForm" method="post">
   <input type="hidden" id="seqMenu" name="seqMenu" value="${param.seqMenu }"> <!-- 메뉴시퀀스 -->
   <input type="hidden" id="id" name="id" value="${userId }"> <!-- member id -->
   <input type="hidden" id="storeNum" name="storeNum" value="${param.storeNum }">
   
   <div class="card" style="width: 100%;">
      <img src="" class="card-img-top" alt="커피이미지">
      <div class="card-body">
          <div id="menuName" class="card-title" align="left"></div>
          <div id="menuContent" class="card-text" align="left"></div>
      </div>
      <ul class="list-group list-group-flush">
         <li class="list-group-item">
         	<div class="row">
         		<div class="size-option col-4">사이즈</div>
	            <div class="col-8 btn-group" role="group" aria-label="size group">
	               <input type="radio" class="btn-check" name="sizeOpt" id="sizeOpt1" value="0" autocomplete="off" checked>
	               <label class="btn btn-outline-secondary" for="sizeOpt1">Small</label>
	            
	               <input type="radio" class="btn-check" name="sizeOpt" id="sizeOpt2" value="1" autocomplete="off">
	               <label class="btn btn-outline-secondary" for="sizeOpt2">Regular</label>
	            
	               <input type="radio" class="btn-check" name="sizeOpt" id="sizeOpt3" value="2" autocomplete="off">
	               <label class="btn btn-outline-secondary" for="sizeOpt3">Large</label>
	            </div>
            </div>
         </li>
         <li class="list-group-item">
         	<div class="row">
	         	<div class="takeout-option col-4">컵선택</div>
	            <div class="col-8 btn-group" role="group" aria-label="takeout group">
	               <input type="radio" class="btn-check" name="takeoutOpt" id="takeoutOpt1" value="0" autocomplete="off" checked>
	               <label class="btn btn-outline-secondary" for="takeoutOpt1">매장컵</label>
	            
	               <input type="radio" class="btn-check" name="takeoutOpt" id="takeoutOpt2" value="1" autocomplete="off">
	               <label class="btn btn-outline-secondary" for="takeoutOpt2">개인컵</label>
	            
	               <input type="radio" class="btn-check" name="takeoutOpt" id="takeoutOpt3" value="2" autocomplete="off">
	               <label class="btn btn-outline-secondary" for="takeoutOpt3">일회용컵</label>
	            </div>
            </div>
         </li>
         <li class="list-group-item">
         	<div class="row">
         		<div class="shot-option col-6">에스프레소 샷</div>
         		<div class="col-6">
		            <button type="button" class="btn btn-outline-secondary" id="minusShotBtn">-</button>
		            <input type="text" name="shotOpt" id="shotOpt" value="0" size=1 />
		            <button type="button" class="btn btn-outline-secondary" id="plusShotBtn">+</button>
		       	</div>
            </div>
         </li>
      </ul>
      <div class="card-body">
         <div class="row">
         	<div class="col-7">
	            <button type="button" class="btn btn-outline-secondary" id="minusQtyBtn">-</button>
	            <input type="text" name="qty" id="qty" value="1" size=1 />
	            <button type="button" class="btn btn-outline-secondary" id="plusQtyBtn">+</button>
            </div>
            <div class="col-5">
	            <input type="text" name="orderPrice" id="orderPrice" size=4>원 
	            <input type="hidden" name="menuPrice" id="menuPrice">
            </div>
         </div>
         <div>
	         <button type="button" id="cartBtn" class="btn btn-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#cartModal">담기</button>
	         <button type="button" id="orderBtn" class="btn btn-secondary btn-lg">주문하기</button>
         </div>
      </div>
   </div>
   </form>
   
      <!-- Modal -->
   <div class="modal fade modal-dialog modal-dialog-centered" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h1 class="modal-title fs-5" id="exampleModalLabel">장바구니에 추가되었습니다.</h1>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <!-- <div class="modal-body">
           ...
         </div> -->
         <div class="modal-footer">
           <button type="button" id="goToCartBtn" class="btn btn-secondary" data-bs-dismiss="modal" onclick="location.href='/bitcafe/cart'">장바구니 가기</button>
           <button type="button" id="goToMenuBtn" class="btn btn-primary" onclick="location.href='/bitcafe/categoryList?storeNum=${param.storeNum }'">다른 메뉴 더보기</button>
         </div>
       </div>
     </div>
   </div>
   
</div><!-- container end -->
   <%@ include file="bottomTab.jsp" %><!-- bottomTab.jsp -->
<!-- bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/bottomTab.js"></script><!-- bottomTab.js -->
<script type="text/javascript" src="/bitcafe/resources/js/menuDetails.js"></script>

</body>
</html>