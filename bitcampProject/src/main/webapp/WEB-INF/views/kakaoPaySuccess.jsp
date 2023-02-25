<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>BitCafe</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/bottomTab.css">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/topImg.css"><!-- topImg.css //background-imge -->
<style type="text/css">
#content_div1 {
	width: auto;
	margin: 0;
	text-align: center;
	font-size: 13pt;
	color: gray;	
	padding-top: 5px;
}
#content_div2 {
	width: auto;
	margin: 0;
	text-align: center;
	font-size: 20pt;
	font-weight: bold;
	padding-top: 150px;
}
#button_div {
	text-align: center;
	padding-top: 10px;
}
#paymentCompleteBtn {
	width: 320px;
	height: 60px;
	
}
.title{
	position: absolute;
	top: 12%;
	left: 65%;
	transform: translate(-50%, -50%);
}
#title_end {
	font-weight: bold;
	color: white;
	font-size: 60pt;
}
</style>
</head>
<body>
<input type="hidden" id="orderGroup" value="${approveResponse.partner_order_id }">
<div class="container" >
	<div class="top-img"></div>
	<div class="title">
         <div id="title_end">Thanks</div>
    </div>
	<div id="content_div2">이용해 주셔서 감사합니다.</div>
	<div id="content_div1">버튼을 누르면 홈화면으로 이동합니다</div>
	<div id="button_div">
		<button type="button" id="paymentCompleteBtn" class="btn btn-primary btn-lg" style="background-color: #360a01;">결제 완료</button>
	</div>
</div>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript">
$('#paymentCompleteBtn').click(function(){
	$.ajax({
		type: 'get',
		url: '/bitcafe/paymentComplete',
		data: {
			'orderGroup' : $('#orderGroup').val()
		},
		success: function(){
			location.href = '/bitcafe/';
		},
		error : function(err){
			console.log(err);
		}
	});
});
</script>
</body>
</html>