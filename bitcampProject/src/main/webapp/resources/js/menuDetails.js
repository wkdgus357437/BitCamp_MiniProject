$(function(){
   $.ajax({
      type: 'get',
      url: '/bitcafe/menuDetails',
      data: 'seqMenu=' + $('#seqMenu').val(),
      dataType: 'json',
      success: function(data){
      	 $('#menuName').attr('value', data.menuName).text(data.menuName);
      	 $('#menuContent').text(data.menuContent);
         $('#menuPrice').val(data.menuPrice);
         $('#orderPrice').val(data.menuPrice);
         $('.card > img').attr("src", data.menuImagePath); 
      },
      complete: function(){//ajax를 완료했을 때 실행
         var menuPrice = parseInt($('#menuPrice').val());
         var orderPrice;
         var sizeOpt = 0;
         var shotOpt = 0;
         var takeoutOpt = 0;
         var qty = 1;
         var orderPrice = (menuPrice + sizeOpt + shotOpt - takeoutOpt)*qty;
         //전역변수로 기본값을 잡고, 버튼을 눌렀을 때 값 수정
         //menuPrice - > 메뉴 기본가격, 수정x
         //orderPrice - > 옵션과 수량을 정해서 값을 정한 후 최종적으로 계산한 값
         
         $('input[name="sizeOpt"]').click(function(){
      
            $(this).attr('checked', true); 
            $('input[name="sizeOpt"]').not(this).attr('checked', false);
            
            if($(this).attr('id')=='sizeOpt1') {
               sizeOpt = 0;
               
            } else if($(this).attr('id')=='sizeOpt2') {
               sizeOpt = 500;
               
            } else if($(this).attr('id')=='sizeOpt3') {
               sizeOpt = 1000;
               
            } 
            orderPrice = (menuPrice + sizeOpt + shotOpt*500 - takeoutOpt)*qty;
            //옵션 하나하나 function마다 orderPrice를 계산해서 prop으로 최신화
            $('#orderPrice').attr('value', orderPrice);
            $('#orderPrice').prop('value', orderPrice);
         });
      
         $('input[name="takeoutOpt"]').click(function(){

            $(this).attr('checked', true); 
            $('input[name="takeoutOpt"]').not(this).attr('checked', false);
            
            if($(this).attr('id')=='takeoutOpt1') {
               takeoutOpt = 0;
               
            } else if($(this).attr('id')=='takeoutOpt2') {
               takeoutOpt = 500;
                
            } else if($(this).attr('id')=='takeoutOpt3') {
               takeoutOpt = 0;
                
            } 
            orderPrice = (menuPrice + sizeOpt + shotOpt*500 - takeoutOpt)*qty;
            
            $('#orderPrice').attr('value', orderPrice);
            $('#orderPrice').prop('value', orderPrice);
         });
      
         $('#plusShotBtn').click(function(){
            shotOpt = parseInt($('#shotOpt').val()) + 1;
            
            if(shotOpt > 3){
               alert("샷 추가는 3샷까지 가능합니다.");
               shotOpt = 3;
            }
            
            $('#shotOpt').attr('value', shotOpt);
            
            orderPrice = (menuPrice + sizeOpt + shotOpt*500 - takeoutOpt)*qty;
            
            $('#orderPrice').attr('value', orderPrice);
            $('#orderPrice').prop('value', orderPrice);
         });
      
         $('#minusShotBtn').on("click", function(){
            shotOpt = parseInt($('#shotOpt').val()) - 1;
         
            if(shotOpt < 0) shotOpt =  0;
            
            $('#shotOpt').attr('value', shotOpt);
            
            orderPrice = (menuPrice + sizeOpt + shotOpt*500 - takeoutOpt)*qty;
            
            $('#orderPrice').attr('value', orderPrice);
            $('#orderPrice').prop('value', orderPrice);
         });
      
      
         $('#plusQtyBtn').on("click", function(){
            qty = parseInt($('#qty').val()) + 1;
            
            $('#qty').attr('value', qty);
            
            orderPrice = (menuPrice + sizeOpt + shotOpt*500 - takeoutOpt)*qty;
            
            $('#orderPrice').attr('value', orderPrice);
            $('#orderPrice').prop('value', orderPrice);
         });
      
         $('#minusQtyBtn').on("click", function(){
            qty = parseInt($('#qty').val()) - 1;
            
            if(qty < 1) qty =  1;
            
            $('#qty').attr('value', qty);
            
            orderPrice = (menuPrice + sizeOpt + shotOpt*500 - takeoutOpt)*qty;
            
            $('#orderPrice').attr('value', orderPrice);
            $('#orderPrice').prop('value', orderPrice);
         });
      },
      error: function(err){
         console.log(err);
      }
   });
});

$('#orderBtn').click(function(){
   $.ajax({
      type: 'post',
      url: '/bitcafe/orderMenu',
      data: {
      	'id' : $('#id').val(),
      	'orderPrice' : $('#orderPrice').val(),
      	'qty' : $('#qty').val(),
      	'menuName' : $('#menuName').attr('value'),
      	'storeNum' : $('#storeNum').val(),
      	'takeoutOpt' : $('input[name="takeoutOpt"]:checked').val(),
      	'sizeOpt' : $('input[name="sizeOpt"]:checked').val(),
      	'shotOpt' : $('#shotOpt').val()
      },
      success: function(data){
         var orderGroup = data;
         location.href='/bitcafe/orderMenuForm?orderGroup='+orderGroup; 
      },
      error: function(err){
         console.log(err);
      }
   });
});

/*
$('#orderBtn').click(function(){
   $.ajax({
      type: 'post',
      url: '/bitcafe/orderMenu',
      data: $('#menuDetailsForm').serialize(),
      success: function(data){
         var orderGroup = data;
         alert(orderGroup);
         var storeNum = $('#storeNum').val();
         location.href='/bitcafe/orderMenuForm?orderGroup='+orderGroup; 
      },
      error: function(err){
         console.log(err);
      }
   });
});
*/

$('#cartBtn').click(function(){
   $.ajax({
      type: 'post',
      url : '/bitcafe/addCart',
      data: {
      	'id' : $('#id').val(),
      	'orderPrice' : $('#orderPrice').val(),
      	'qty' : $('#qty').val(),
      	'menuName' : $('#menuName').attr('value'),
      	'storeNum' : $('#storeNum').val(),
      	'takeoutOpt' : $('input[name="takeoutOpt"]:checked').val(),
      	'sizeOpt' : $('input[name="sizeOpt"]:checked').val(),
      	'shotOpt' : $('#shotOpt').val()
      },
      success: function(){
         $('#cartModal').modal('show');
      },
      error:function(err){
         console.log(err);
      }
   });
});
