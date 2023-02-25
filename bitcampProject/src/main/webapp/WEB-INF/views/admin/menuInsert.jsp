<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Bitcafe 관리자 페이지</title>
<link rel="icon" href="/bitcafe/resources/img/order.png">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/bitcafe/resources/css/admincss/main.css">
<style type="text/css">
div#menuNameDiv, div#menuContentDiv, div#menuPriceDiv {
   color: red;
   font-size: 20px;
}
</style>
</head>
<body>
<div id="wrap">
	<%@ include file="page.jsp" %>
	<div id="formContent" class="row">
	<div class="col-10">
	<form name="menuInsertForm" id="menuInsertForm" method="">
		<table cellpadding="5" cellspacing="0" class="table table-sm" id="menuInsertTable">
			<!-- <tr>
				<th>메뉴이미지</th>
				<td>
					<img id="showImg" width="150" height="150"><br><br>
					<input type="file" name="img" id="img">
				</td>
			</tr> -->
			<tr>
				<th>메뉴이름</th>
				<td>
					<input type="text" placeholder="메뉴이름 입력" name="menuName" id="menuName" maxlength="30"/>
					<div id="menuNameDiv"></div>
				</td>
			</tr>
			<tr>
				<th>메뉴설명</th>
				<td>
					<textarea placeholder="메뉴설명 입력" name="menuContent" id="menuContent" cols="50" rows="5"></textarea>
					<div id="menuContentDiv"></div>
				</td>
			</tr>
			<tr>
				<th>메뉴가격</th>
				<td>
					<input type="text" name="menuPrice" id="menuPrice" maxlength="8"/>원
					<div id="menuPriceDiv"></div>
				</td>
			</tr>
			<tr>
				<th>카테고리 선택</th>
				<td>
					<select name="categoryNum" id="categoryNum">
						<option value="">카테고리</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="button" class="menuInsert btn btn-primary" value="메뉴추가">
					<input type="reset" value="다시작성" class="btn btn-primary">
				</td>
			</tr>
		</table>
	</form>
	</div>
	</div><!-- content -->
</div>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/admin.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/menuInsert.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/imgUpload.js"></script>
<script type="text/javascript" src="/bitcafe/resources/js/orderAlert.js"></script>
</body>
</html>