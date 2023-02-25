$(function(){
		$.ajax({
			type: 'post',
			url: '/bitcafe/update',
			data: 'ssId=' + $('#hidden_Id').val(),
			dataType: 'json',
			success: function(data){
				$('#id').val(data.id);
				$('#name').val(data.name);
				$('#email1').val(data.email1);
				$('#email2').val(data.email2);
				$('#tel1').val(data.tel1);
				$('#tel2').val(data.tel2);
				$('#tel3').val(data.tel3);
			},
			error: function(err){
				console.log(err);
			}
		});//$.ajax
	
});

//취소 버튼
$('#resetBtn').click(function(){
	$('#searchIdBtn').trigger('click'); //강제 이벤트 발생
});

$('#updateBtn').click(function(){
	$('#nameDiv').empty();
	$('#pwdDiv').empty();
	$('#emailDiv').empty();
	
	if(!$('#name').val()){
		$('#nameDiv').text('이름을 입력해주세요');
	}
	else if(!$('#pwd').val()){
		$('#pwdDiv').text('비밀번호를 입력해주세요');
	}
	else if(!$('#repwd').val()){
		$('#pwdDiv').text('재확인 비밀번호를 입력해주세요');
	}
	else if($('#repwd').val() != $('#pwd').val()){
		$('#pwdDiv').text('비밀번호가 일치하지 않습니다');
	}
	else if(!$('#email1').val() || !$('#email2').val()){
		$('#emailDiv').text('이메일을 입력해주세요');
	}
	else if(!$('#tel2').val() || !$('#tel3').val()){
		$('#telDiv').text('전화번호를 입력해주세요');
	}
	else if(confirm('회원정보를 수정하시겠습니까?')){
	$.ajax({
			type: 'post',
			url: '/bitcafe/updateGo',
			data: $('#writeForm').serialize(),
			success: function(){
				alert("회원님의 정보를 수정하였습니다. 다시 로그인해주세요.");
				$.ajax({
					url: '/bitcafe/logout',
					type: 'post',
					success: function(){
					location.href = "/bitcafe";
				},
					error: function(err){
					console.log(err);
					}
				});
			},
			error: function(err){
				console.log(err);
			}
		});//$.ajax
	}
	
});













