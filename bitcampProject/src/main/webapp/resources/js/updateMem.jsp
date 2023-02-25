$(function(){
	$('#updateDiv').hide();
	
	//아이디 찾기
	$('#searchIdBtn').click(function(){
		$('#resultDiv').empty();
		
		$.ajax({
			type: 'post',
			url: '/bitcampProject/others/getUser',
			data: 'id=' + $('#searchId').val(),
			
			success: function(data){
				
				if(data == ''){
					$('#updateDiv').hide();
					
					$('#resultDiv').text('찾고자 하는 아이디가 없습니다');
					$('#resultDiv').css('color', 'red');
					$('#resultDiv').css('font-weight', 'red');
				}else{
					$('#updateDiv').show();
					
					$('#name').val(data.name);
					$('#id').val(data.id);
				}
			},
			error: function(err){
				console.log(err);
			}
		});//$.ajax
	});
});

//취소 버튼
$('#resetBtn').click(function(){
	$('#searchIdBtn').trigger('click'); //강제 이벤트 발생
});

$('#updateBtn').click(function(){
	$.ajax({
		type: 'post',
		url: '/bitcampProject/others/update',
		data: $('#updateForm').serialize(),
		success: function(){
			alert("회원님의 정보를 수정하였습니다.");
			location.href='/bitcampProject/others/list';
		},
		error:function(err){
		
		}
	});
});













