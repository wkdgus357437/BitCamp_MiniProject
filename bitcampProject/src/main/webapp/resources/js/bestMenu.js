$(function(){

$.ajax({
type: 'get',
url: '/bitcafe/getBestMenuList',
dataType:'json',
success:function(data){
//alert(JSON.stringify(data));

$.each(data,function(index,items){
  $('<img/>',{ //append -> 메소드 체인 방식 
    src:items.menuImagePath,
    alt:'bestMenu',
    class:'bestMenuImg'
  }).append($('<input/>', {type:"hidden", id:"seqMenu"}).val(items.seqMenu))
  .appendTo($('#bestMenu01'));
})//each
},
error:function(err){
  console.log(err);
}
});//ajax
});//function
/*-------------------------------------------------------------------- */
// $('#bestMenu01').on('click','.bestMenuImg',function(){
//   location.href='/bitcafe/menuDetailsForm?seqMenu='+$(this).children('#seqMenu').val();
// });
/*-------------------------------------------------------------------- */

$('#bestMenu01').on('click','.bestMenuImg',function(){

  location.href='/bitcafe/order?seqMenu='+$(this).children('#seqMenu').val();
});


//1.베스트 메뉴 이미지를 눌렀을 때
//2. 매장선택으로 location.href='/bitcafe/order? 간 후 눌렀을 때 
//3. 카테고리넘어가고 바로 menuDetailsForm으로 => location.href='/bitcafe/menuDetailsForm?

//매장넘버 storeNum,매뉴넘버seqMenu , 스토어넘버storeNum