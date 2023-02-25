$(function () {
	//alert($('#id').val());
    $.ajax({
        type: 'get',
        url: '/bitcafe/orderLoad',
        data: 'id='+$('#id').val(),
        dataType: 'json',
        success: function (data) {
        	//alert(JSON.stringify(data));
            $.each(data, function (index, items) {
            	if(items.orderCode == 2){
	                $('<li/>', { class: "row nnn", id: "income"})
	                .append($('<div/>', { id: 'orderGroup', val: items.orderGroup}).text("주문번호 : "+items.orderGroup))
	                .append($('<div/>', { id: 'menuName'}).text(items.menuName + " ")
	                	.append($('<input/>', { type: "button", value: "취소", class: "btn btn-danger orderRejectBtn", id: "ordeRejectBtn"}).css('width', '100px'))
	                	.append($('<input/>', { type: "button", value: "주문확인", class: "btn btn-success orderConfirmBtn", id: "orderConfirmBtn"}).css('width', '100px'))
	                	.append($('<div/>', { id: 'orderPrice'}).text(items.orderPrice+"₩")))
	                .append($('<hr/>').css('margin-top', '16px'))
	                .appendTo($('#income'))
            	}else if(items.orderCode == 3){
	                $('<li/>', { class: "row nnn", id: "confirm"})
	                .append($('<div/>', { id: 'orderGroup', val: items.orderGroup}).text("주문번호 : "+items.orderGroup))
                	.append($('<div/>', { id: 'menuName'}).text(items.menuName + " ")
                		.append($('<input/>', { type: "button", value: "완료", class: "btn btn-success orderCompleteBtn", id: "orderConfirmBtn"}).css('width', '100px'))
                		.append($('<div/>', { id: 'orderPrice'}).text(items.orderPrice+"₩")))
	                .append($('<hr/>').css('margin-top', '16px'))
	                .appendTo($('#confirm'))
            	}else{
	                $('<li/>', { class: "row nnn", id: "complete"})
	                .append($('<div/>', { id: 'orderGroup', val: items.orderGroup}).text("주문번호 : "+items.orderGroup))
	                	.append($('<div/>', { id: 'menuName'}).text(items.menuName + " "))
	                	.append($('<div/>', { id: 'orderPrice'}).text(items.orderPrice+"₩"))
	                .append($('<hr/>').css('margin-top', '16px'))
	                .appendTo($('#complete'))
            	}
            });
        },
        error: function (err) {
            console.log(err);
            
        }
    });

});//orderLoad

$(document).on('click', '.orderConfirmBtn', function(){
	alert($(this).parent().prev().val());
	if(confirm('메뉴를 접수하시겠습니까?')){
		$.ajax({
	        type: 'get',
	        url: '/bitcafe/orderConfirm',
	        data: 'orderGroup='+$(this).parent().prev().val(),
	        success: function () {
	        	alert('접수되었습니다');
	        	location.reload();
	        },
	        error: function (err) {
	        	console.log(err)
	        }
	    });
	}
});//orderConfirm

$(document).on('click', '.orderCompleteBtn', function(){
	if(confirm('완료 하시겠습니까?')){
		$.ajax({
	        type: 'get',
	        url: '/bitcafe/orderComplete',
	        data: 'orderGroup='+$(this).parent().prev().val(),
	        success: function () {
	        	alert('완료되었습니다');
	        	location.reload();
	        },
	        error: function (err) {
	        	console.log(err)
	        }
	    });
	}
});//orderComplete

$(document).on('click', '.orderRejectBtn', function(){
	if(confirm('취소 하시겠습니까?')){
		$.ajax({
	        type: 'get',
	        url: '/bitcafe/orderReject',
	        data: 'orderGroup='+$(this).parent().prev().val(),
	        success: function () {
	        	alert('취소되었습니다.');
	        	location.reload();
	        },
	        error: function (err) {
	        	console.log(err)
	        }
	    });
	}
});//orderReject

