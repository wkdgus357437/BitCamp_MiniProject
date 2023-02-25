var ssId = $("#hidden_Id").val();
var ssPwd = $("#pwd").val();
var checkPwd = '';

$(".inputpwd").keyup(function(){
	//alert("asdasd");
	$.ajax({
	
		url : "/bitcafe/checkPwd", //비번체크
		type : "POST", 
		data : {ssId:$("#hidden_Id").val(), ssPwd:$("#pwd").val()}, //보낼 데이터
		dataType : "json",
		success: function(data){
		//alert(JSON.stringify(data));
		checkPwd = data.pwd;
		
		}
	
	});

});
	
$("#Btn").on("click", function(){
	//alert(checkPwd);
	if(checkPwd == $("#pwd").val()){

	 $.ajax({
	 	type : 'post', 
	 	url : "/bitcafe/memberDelete", 
	 	data : "id=" + $("#hidden_Id").val(),
	 	success: function(data){
	 		alert("회원탈퇴가 완료되었습니다. 이용해주셔서 감사합니다!");
	 		location.href='/bitcafe';
	 	}
	
	});
	}else{
		alert("비밀번호가 일치하지 않습니다.");
	}
});
$(document).ready(function(){
		$("#deletee").on("click", function(){
			
			if($("#memberPw").val()==""){
				alert("비밀번호를 입력해주세요");
				$("#memberPw").focus();
				return false
			}
			
			if ($("#memberPw").val() != $("#memberPw2").val()) {
				alert("비밀번호가 일치하지 않습니다.");
				$("#memberPw").focus();
				 
				return false;
				}
			
			$.ajax({
				url : "/member/pwCheck",
				type : "POST",
				dataType : "json",
				data : $("#deleteForm").serializeArray(),
				success: function(data){
					
					if(data==0){
						alert("비밀번호를 확인해주세요.");
						return;
					}else{
						if(confirm("탈퇴하시겠습니까?")){
							$("#deleteForm").submit();
						}
						
					}
				}
			})
		});
})
