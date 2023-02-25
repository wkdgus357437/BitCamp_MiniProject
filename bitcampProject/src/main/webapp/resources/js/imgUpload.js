/*//업로드 버튼을 누르기 전에 카메라 아이콘을 통해서 선택한 이미지가 맞는지 확인하기 위해서 이미지를 보이게 한다.
$('#img').on('change', function(){
	readURL(this);
});

function readURL(input) {
	if(input.files[0]){
		var reader = new FileReader();
		reader.onload  = function(e) { //e.target : 이벤트가 발생하는 요소를 반환해준다.
			$('#showImg').attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}//if
}//반환까지만, 업로드 x(업로드는 파일 경로에 넣어줌)

$('.menuInsert').click(function(){
	var formData = new FormData($('#menuInsertForm')[0]);
	$.ajax({
		type: 'post',
		url: '/bitcafe/upload',
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		data: formData,
		dataType: 'text',
		success: function(data){
			alert(data);
			
			appendTo('<input/>');
		},
		error: function(err){
			console.log(err);
		}
	});
});//upload(실제로 파일을 지정한 경로에 넣어줌)*/