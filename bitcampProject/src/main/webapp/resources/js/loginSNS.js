Kakao.init('3d4c3bc420d735bb63534cac573c26b5');


$("#loginSNSBtn").on("click", function(){
    //1. 로그인 시도
    window.Kakao.Auth.login({
        scope : 'profile_nickname, account_email', //받아오는 항목을 모두 적어야한다.
        success: function(response) {
         
	          //2. 로그인 성공시, API 호출
	          window.Kakao.API.request({
	            url: '/v2/user/me', //고정값
	            success: function(res) {
	            	   const kakao_account = res.kakao_account;
	            	   
	            	   var memId = kakao_account.email;
                       console.log(kakao_account.email)
			   	alert('성공');
							
				$.ajax({
					type: 'get',
					url: '/bitcafe/loginSNS',
					data: 'name='+kakao_account.profile.nickname, //카카오톡 프로필 닉네임이 메인에 나오게했다.
					success: function(data){
	                location.href="http://localhost:8080/bitcafe/index";
					},
					error: function(err){
		        		 console.log(err);
		        	 }
				});
				
			
	        }
	          })
	          console.log(authObj);
	          var token = authObj.access_token;
	        },
	        fail: function(err) {
	          alert(JSON.stringify(err));
	        }
	      });
	        
	})