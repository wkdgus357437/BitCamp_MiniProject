$(function() {
    
    //Main 카테고리 셋팅 (DB에서 값을 가져와 셋팅 하세요.)
    var categoryArray = new Array();
    var categoryObject = new Object();
    
    categoryObject = new Object();
    categoryObject.categoryId = "1";
    categoryObject.categoryName = "에스프레소";
    categoryArray.push(categoryObject);
    
    categoryObject = new Object();
    categoryObject.categoryId = "2";
    categoryObject.categoryName = "디카페인";
    categoryArray.push(categoryObject);
    
    categoryObject = new Object();
    categoryObject.categoryId = "3";
    categoryObject.categoryName = "프라푸치노";
    categoryArray.push(categoryObject);
    
    categoryObject = new Object();
    categoryObject.categoryId = "4";
    categoryObject.categoryName = "아포가토";
    categoryArray.push(categoryObject);
    
    categoryObject = new Object();
    categoryObject.categoryId = "5";
    categoryObject.categoryName = "병음료";
    categoryArray.push(categoryObject);
    
    //메인 카테고리 셋팅
    var categorySelect = $("select[name='categoryNum']");
    
    for(var i=0 ; i<categoryArray.length ; i++){
        categorySelect.append("<option value='"+categoryArray[i].categoryId+"'>"+categoryArray[i].categoryName+"</option>");
    }
});

$('.menuInsert').click(function(){
	$('#menuNameDiv').empty();
	$('#menuContentDiv').empty();
	$('#menuPriceDiv').empty();
	
	if(!$('#menuName').val()){
		$('#menuNameDiv').text("메뉴이름을 입력하세요");
		$('#menuName').focus();
		
	}else if(!$('#menuContent').val()){
		$('#menuContentDiv').text("메뉴내용을 입력하세요");
		$('#menuContent').focus();
		
	}else if(!$('#menuPrice').val()){
		$('#menuPriceDiv').text("메뉴가격을 입력하세요");
		$('#menuPrice').focus();
		
	}else{
		$.ajax({
			type: 'post',
			url: '/bitcafe/menuWrite',
			data: $('#menuInsertForm').serialize(),
			success: function(){
				alert('메뉴추가를 완료하였습니다');
				location.href='/bitcafe/menuInsert';
			},
			error: function(err){
				console.log(err);
			}
		});
	}
});

