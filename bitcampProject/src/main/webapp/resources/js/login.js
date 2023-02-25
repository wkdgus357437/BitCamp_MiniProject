$('#loginBtn').click(function(){
	$('#idDiv').empty();
	$('#pwdDiv').empty();
	
	if($('#id').val() == ''){
		$('#idDiv').text('ㅤ아이디를 입력해주세요');
		$('#idDiv').css('color', 'red');
		$('#id').focus();
		
	}else if($('#pwd').val() == ''){
		$('#pwdDiv').text('ㅤ비밀번호를 입력해주세요');
		$('#pwdDiv').css('color', 'red');
		$('#pwd').focus();
	
	}else{
		$.ajax({
			type: 'post',
			url: '/bitcafe/memberlogin',
			data: $('#loginForm').serialize(),
			success: function(data){
				console.log(data);
				if(data == 'non_exist'){
					$('#idDiv').text('회원정보를 찾을 수 없습니다'); 
					$('#idDiv').css('color', 'red');
					
				}else if(data == 'exist,0'){
					$('#pwdDiv').text('로그인 성공했습니다.');
					$('#pwdDiv').css('color', 'blue');
					alert("로그인 성공했습니다.");
					location.href='/bitcafe/index';	
					
				}else if(data == 'exist,1'){
					$('#pwdDiv').text('로그인 성공했습니다.');
					$('#pwdDiv').css('color', 'blue');
					alert("로그인 성공했습니다.");
					location.href='/bitcafe/admin';
				}
					
			},
			error: function(err){
        		 console.log(err);
        	 }
		});
	}
});
