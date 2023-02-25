$(function () {
    $.ajax({
        type: 'get',
        url: '/bitcafe/getCategoryList',
        dataType: 'json',
        success: function (data) {
            //alert(JSON.stringify(data));
 
           
            $.each(data, function (index, items) {
                $('<div/>', { class: "row click_category", id: "category_List"})
                    .append($('<div/>', { class: "col-6", id: "category_img_each" }).append($('<img/>', {
                        src: items.categoryImagePath,
                        alt: "categoryImg",
                        class: "rounded float-start",
                        id: "category_thumb"
                    })))
                    .append($('<div/>', { class: "col", id: "category_info" })
                        .append($('<input/>', {type:"hidden", id:"categorySeq"}).val(items.categoryNum))
                        .append($('<div/>', { id: "category_name" }).text(items.categoryName))).append($('<hr/>').css('margin-top', '16px'))
                        
                    .appendTo($('#categoryStart'))

            });

        },
        error: function (err) {
            console.log(err);
        }
    });

});

$(document).on('click', '.click_category', function(){

	const urlParams = new URL(location.href).searchParams;
	const storeNum = urlParams.get('storeNum');
	
	//alert(storeNum);	

	var categoryNum = $(this).find('input').val();
	var categoryName = $(this).find('#category_name').text();
	//alert(storeNum);
	//alert(categoryName);
	location.href="/bitcafe/menu?categoryNum="+categoryNum+"&storeNum="+storeNum+"&categoryName="+categoryName;
	

});

function goback_store_info(){
	//alert("뒤로가기 123123");	
	location.href="/bitcafe/order?num=2";

};
