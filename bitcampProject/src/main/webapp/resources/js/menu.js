$(function(){
    const urlParams = new URL(location.href).searchParams;
	const storeNum = urlParams.get('storeNum');
	const categoryName = urlParams.get('categoryName');
	const categoryNum = urlParams.get('categoryNum');

    $.ajax({
        type: 'get',
        url: '/bitcafe/getMenuList',
        data: "categoryNum=" + $('#categoryNum_hidden').val(),
        dataType: 'json',
        success: function (data) {
            //alert(JSON.stringify(data));
            
            $.each(data, function (index, items) {
                    $('<div/>', { class: "row click_menu", id: "menu_List"})
                        .append($('<div/>', { class: "col-3", id: "menu_img_each" }).append($('<img/>', {
                                src: items.menuImagePath,
                                alt: "menuImg",
                                class: "rounded float-start",
                                id: "menu_thumb"
                            })))
                            .append($('<div/>', { class: "col", id: "menu_info" })
                                .append($('<input/>', {type:"hidden", id:"seqMenu"}).val(items.seqMenu))
                                .append($('<div/>', { id: "menu_name" }).text(items.menuName))
                                .append($('<div/>', { id: "menu_price" }).text(items.menuPrice + "원")))
                                .append($('<hr/>').css('margin-top', '16px'))
                    
                            .appendTo($('#menuStart'))
                    
                    });
                    
                },
                error: function (err) {
                    console.log(err);
                }
            });
            
        });
        

$(document).on('click', '.click_menu', function(){

	const urlParams = new URL(location.href).searchParams;
	const storeNum = urlParams.get('storeNum');
    const categoryNum = urlParams.get('categoryNum');
	
	var seqMenu = $(this).find('input').val();
	var menuName = $(this).find('#menu_name').text();

	location.href="/bitcafe/menuDetailsForm?seqMenu="+seqMenu+"&storeNum="+storeNum;
	

});

function goback_store_info(){
    const urlParams = new URL(location.href).searchParams;
	const storeNum = urlParams.get('storeNum');
    	
    location.href="/bitcafe/categoryList?storeNum="+storeNum;

};