$('#category li').click(function () {
   $('#menuList div').remove();
    $.ajax({
        type: 'get',
        url: '/bitcafe/menuLoad',
        data: 'categoryNum=' + $(this).val(),
        dataType: 'json',
        success: function (data) {
           //alert(JSON.stringify(data));
            $.each(data, function (index, items) {
                $('<div/>', { class: "row nnn", id: "menuList"})
                    .append($('<div/>', { class: "col-4", id: "menuImg" })
                    .append($('<img/>', {
                        src: items.menuImagePath,
                        alt: "menu",
                        class: "rounded float-start",
                        id: "menu_thumb"
                    })))
                    .append($('<input/>', { type: "hidden" , class: "seqMenu" , value: items.seqMenu}))
                    .append($('<div/>', { class: "col-8", id: "menuInfo" })
                       .append($('<div/>', { id:"menuName"}).text(items.menuName))
                       .append($('<div/>', { id: "menuContent" }).text(items.menuContent))
                       .append($('<div/>', { id: "menuPrice" }).text(items.menuPrice+'₩'))
                       .append($('<input/>', { type: "button", value: "수정", class: "btn btn-success menuEditBtn", id: "menuEditBtn"}).css('width', '100px'))
                       .append($('<input/>', { type: "button", value: "✕", class: "btn btn-danger menuDeleteBtn", id: "menuDeleteBtn"}).css('width', '100px')))
                    .append($('<hr/>').css('margin-top', '16px'))
                    .appendTo($('#menuList'))
            });
        },
        error: function (err) {
            console.log(err);
            
        }
    });

});//카테고리별 메뉴

$(document).on('click', '.menuEditBtn', function(){
	console.log($(this).parent().prev().val());
	window.scrollTo(0,0);
	$.ajax({
        type: 'get',
        url: '/bitcafe/menuUpdateForm',
        data: 'seqMenu=' + $(this).parent().prev().val(),
        dataType: 'json',
        success: function (data) {
        	//alert(JSON.stringify(data));
        	$('#menuList div').remove();
        	$('<div/>', { class: "row nnn", id: "menuList"})
	            .append($('<div/>', { class: "col-4", id: "menuImg" })
	            .append($('<img/>', {
	                src: data.menuImagePath,
	                alt: "menu",
	                class: "rounded float-start",
	                id: "menu_thumb"
	            })))
	            .append($('<input/>', { type: "hidden" , class: "seqMenu" , id: "seqMenu", value: data.seqMenu}))
	            .append($('<div/>', { class: "col-8", id: "menuInfo" })
	                .append($('<input/>', { type: "text", id:"menuName", value: data.menuName}))
	                .append($('<textarea/>', { id: "menuContent", html: data.menuContent }))
	                .append($('<input/>', { type: "text", id: "menuPrice", value: data.menuPrice }))
	                .append($('<br/>'))
	                .append($('<br/>'))
	                .append($('<input/>', { type: "button", value: "수정", class: "btn btn-success menuUpdateBtn", id: "menuUpdateBtn"}).css('width', '100px'))
	                .append($('<input/>', { type: "button", value: "취소", class: "btn btn-danger menuBackBtn", id: "menuBackBtn"}).css('width', '100px')))
	            .append($('<hr/>').css('margin-top', '16px'))
	            .appendTo($('#menuList'))
        },
        error: function (err) {
            console.log(err);
        }
    });
});//메뉴편집 form

$(document).on('click', '.menuUpdateBtn', function(){
	console.log($(this).parent().prev().val());
	if(confirm('메뉴를 수정하시겠습니까?')){
		$.ajax({
			type: 'get',
			url: '/bitcafe/menuUpdate',
			data: {'menuName': $('#menuName').val(),
				   'menuContent' : $('#menuContent').val(), 
				   'menuPrice' : $('#menuPrice').val(),
				   'seqMenu' : $('#seqMenu').val()},
			success: function(data){
				alert('수정을 완료하였습니다.');
				$('#category li').trigger('click');
			},
			error: function(err){
				console.log(err);
			}
		});//$.ajax
		
	}
});//메뉴수정

$(document).on('click', '.menuBackBtn', function(){
	if(confirm('메뉴수정을 취소 하시겠습니까?')){
		$('#category li').trigger('click');
	}
});//메뉴수정 취소

$(document).on('click', '.menuDeleteBtn', function(){
	if(confirm('메뉴를 삭제하시겠습니까?')){
		$.ajax({
	        type: 'get',
	        url: '/bitcafe/menuErase',
	        data: 'seqMenu=' + $(this).parent().prev().val(),
	        success: function () {
				alert('메뉴를 삭제하였습니다');
				$('#category li').trigger('click');
	        },
	        error: function (err) {
	            console.log(err);
	        }
    	});
	}
});//메뉴삭제