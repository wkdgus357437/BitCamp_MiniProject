$(document).ready(function () {
	if($('#hidden_memName').val()){
	}else{
		alert('로그인 후 이용 가능합니다.');
		location.href = '/bitcafe/loginForm';
	}
});

$('#logoutBtn').click(function(){
	if(confirm('로그아웃 하시겠습니까?')){
		$.ajax({
			url: '/bitcafe/logout',
			type: 'post',
			success: function(){
				alert('로그아웃 성공');
				location.href = "/bitcafe";
			},
			error: function(err){
				console.log(err);
			}
		});
	}	

});