$(function () {
    $.ajax({
        type: 'get',
        url: '/bitcafe/store/getStoreList',
        dataType: 'json',
        success: function (data) {
           //alert(JSON.stringify(data));
            $.each(data, function (index, items) {
            
            $('<div/>', {class: "storeList_start", id: "storeList_start"})
                .append($('<div/>', { class: "row nnn", id: "store_List"})
                    .append($('<div/>', { class: "col-4", id: "store_img_each" }).append($('<img/>', {
                        src: items.storeImagePath,
                        alt: "store1",
                        class: "rounded float-start",
                        id: "store_thumb"
                    })))
                    .append($('<div/>', { class: "col-8", id: "store_info" })
                        .append($('<input/>', {type:"hidden", id:"storeSeq"}).val(items.storeNum))
                        .append($('<div/>', { id: "store_name" }).text(items.storeName))
                        .append($('<div/>', { id: "store_addr" }).text(items.storeAddr))
                        .append($('<div/>', { class: "row", id: "row_tel" })
                            .append($('<div/>', { class: "col-1", id: "col_phoneIcon" })
                                .append($('<img/>', {
                                    src: "/bitcafe/resources/img/phone1.jpg",
                                    id: "phone_img"
                                })
                                    .css({ 'width': '17px', 'height': '17px' })))
                            .append($('<div/>', { class: "col-7", id: "col_telNum" })
                                .append($('<div/>', { id: "store_tel" }).text(items.storeTel)
                                ))))
                    .append($('<hr/>').css('margin-top', '16px')))
                    .appendTo($('#storeList_all'))

            });

        },
        error: function (err) {
            console.log(err);
        }
    });

});

$(document).on('click', '.nnn', function(){
    const urlParams = new URL(location.href).searchParams;
	const seqMenu = urlParams.get('seqMenu');
    var storeNum = $(this).find('input').val();
   //alert(storeNum);
   
   //index에서 best메뉴 선택시 매장으로 and menuDetail로
   if(seqMenu!=null){
       location.href="/bitcafe/menuDetailsForm?storeNum="+storeNum+"&seqMenu="+seqMenu;
    }else {
       location.href="/bitcafe/categoryList?storeNum="+storeNum;

   }

});

function goback_store_info(){
   //alert("뒤로가기 123123");   
   location.href="/bitcafe?num=1";

};


//var enter = document.getElementById("button-addon2");


$('#button-addon2').click(function () {
   $('.storeList_start').remove();
    //alert("검색버튼")
    $.ajax({
        type: 'get',
        url: '/bitcafe/store/getStoreList',
        data: "keyword=" + $('#storekeyword').val(),
        dataType: 'json',
        success: function (data) {
           //alert(JSON.stringify(data));
            $.each(data, function (index, items) {
            
            $('<div/>', {class: "storeList_start", id: "storeList_start"})
                .append($('<div/>', { class: "row nnn", id: "store_List"})
                    .append($('<div/>', { class: "col-4", id: "store_img_each" }).append($('<img/>', {
                        src: items.storeImagePath,
                        alt: "store1",
                        class: "rounded float-start",
                        id: "store_thumb"
                    })))
                    .append($('<div/>', { class: "col-6", id: "store_info" })
                        .append($('<input/>', {type:"hidden", id:"storeSeq"}).val(items.storeNum))
                        .append($('<div/>', { id: "store_name" }).text(items.storeName))
                        .append($('<div/>', { id: "store_addr" }).text(items.storeAddr))
                        .append($('<div/>', { class: "row", id: "row_tel" })
                            .append($('<div/>', { class: "col-1", id: "col_phoneIcon" })
                                .append($('<img/>', {
                                    src: "./resources/img/phone1.jpg",
                                    alt: "phone1",
                                    id: "phone_img"
                                })
                                    .css({ 'width': '17px', 'height': '17px' })))
                            .append($('<div/>', { class: "col", id: "col_telNum" })
                                .append($('<div/>', { id: "store_tel" }).text(items.storeTel)
                                ))))
                    .append($('<hr/>', { id: "store_hr" }).css('margin-top', '16px')))
                    .appendTo($('#storeList_all'))

            });

        },
        error: function (err) {
            console.log(err);
        }
    });

});


// //Javascript
// var lastScrollTop = 0;
// var delta = 5;
// var fixBox = document.getElementsByTagName('footer');
// var fixBoxHeight = fixBox.offsetHeight;
// var didScroll;
// //스크롤 이벤트 
// $(window).onscroll = function(e) {
//     didScroll = true;
// };

// //0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
// setInterval(function(){
//     if(didScroll){
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled(){
//     var nowScrollTop = window.scrollY;
//     if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
//         return;
//     }
//     if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
//         //Scroll down
//         fixBox.classList.remove('show');
//         document.getElementsByClassName("footer").style.display="none";
//     }else{
//         if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
//             //Scroll up
//             fixBox.classList.add('show');
//             document.getElementsByClassName("footer").style.display="block";
//         }
//     }
//     lastScrollTop = nowScrollTop;
// }

// $(window).scroll(function(){
//     var fixBox = document.getElementsByTagName('footer');
//     var scrT = $(window).scrollTop();
//     console.log(scrT); //스크롤 값 확인용
//     if(scrT == $(document).height() - $(window).height()){
//         //스크롤이 끝에 도달했을때 실행될 이벤트
//         fixBox.classList.remove('show');
//         document.getElementsByClassName("footer").style.display="none";
//         $('.menu').hide();
//     } else {
//         //아닐때 이벤트
//         fixBox.classList.add('show');
//         document.getElementsByClassName("footer").style.display="block";
//         $('.menu').show();
//     }
// })