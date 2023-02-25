$("#input_email").keyup(function() {
	//alert("dfdfsdf");
	//console.log("keyup 테스트");
	
	$.ajax({
		type:'post',
		url:'getId',
		data: 'email='+$("#input_email").val(),
		dataType: 'text',
		success:function(data){
			if(data != ""){
				//alert(data+"버튼업");
				//$('.id_input_re_1').css("display","inline-block");
				//$('#button-addon2').css("display", "block");
				$('#email_false').css("display", "none");
			} else {
				//alert("데이터 없음")
				//$('.id_input_re_2').css("display","inline-block");
				//$('#button-addon2').css("display", "none");	
				$('#email_false').css("display", "block");
			}
			
		}// success 종료
	}); // ajax 종료

});// function 종료


var code = ""; //이메일전송 인증번호 저장위한 코드
/* 인증번호 이메일 전송 */
$("#button-addon2").click(function(){
	
	var email = $("#input_email").val();// 입력한 이메일
	
	
    /* 이메일 형식 유효성 검사 */
    if(mailFormCheck(email)){
        alert("이메일이 전송 되었습니다.");
    } else {
        alert("이메일 형식이 올바르지 않습니다.");
        return false;
    }  
    
     $.ajax({
        
        type:"GET",
        url:"mailCheck?email=" + email,
        dataType: 'text',
		success:function(data){
			//console.log("data : " + data);
			code = data;
        }
                
    });
	
});

/* 인증번호 비교 */
$("#button-addon3").click(function(){
    
    var inputCode = $("#input_code").val();
    if(inputCode == code){// 일치할 경우
    	
    	$.ajax({
    		type:'post',
    		url:'getId',
    		data: 'email='+$("#input_email").val(),
    		dataType: 'text',
    		success:function(data){
				alert("확인되었습니다. 아이디는 " + data + " 입니다.");
				location.href='/bitcafe/loginForm';
    		}
    	
    	});
    	
    } else {                                            // 일치하지 않을 경우
		alert("인증번호가 일치하지 않습니다.")
    }    
        
});

/* 입력 이메일 형식 유효성 검사 */
function mailFormCheck(email){
   var form = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
   return form.test(email);
}
//엔터키로 검색하기 13번키 => 엔터키
document.getElementById("input_email").addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        document.getElementById("button-addon2").click();
    }
});