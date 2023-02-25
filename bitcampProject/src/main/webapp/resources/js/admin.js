$('#logoutBtn').click(function(){
	//alert('로그아웃 하시겠습니까?');
	if(confirm('로그아웃 하시겠습니까?')){
		$.ajax({
		url: '/bitcafe/adminLogout',
		success: function(data){
			alert("로그아웃 되었습니다.");
			location.href='/bitcafe?num=1';
		},
		error: function(err){
			console.log(err);
		}
	});
		
	}
});
$(function(){
	let query = window.location.search;
	let param = new URLSearchParams(query);
	let num = param.get('num');
	
	if(num == 1){
		$('#orderMenuList').addClass('menu-active');
		
	}else if(num == 2){
		$('#orderCount').addClass('menu-active');
	
	}else if(num == 3){
		$('#menuInsert').addClass('menu-active');
	
	}else if(num == 4){
		$('#menuDelete').addClass('menu-active');
	
	}
});
$(document).ready(function () {
   if($('#id').val()){
   }else{
      alert('로그인 후 이용 가능합니다.');
      location.href = '/bitcafe/loginForm';
   }
});