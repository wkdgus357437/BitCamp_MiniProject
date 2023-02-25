

$(document).ready(function() {

  $.ajax({
    type : 'get',
    url : '/bitcafe/getEventList',
    data: 'seqEvent='+$('#seqEvent_hidden').val(),
    dataType : 'json',
    success : function(data) {
      // alert(JSON.stringify(data));
 
       $('#eventNameSpan').text(data.subject);
			$('#eventContentSpan').text(data.content);
    $('<tr/>').append($("<img/>", {
    src : data.eventImagePath,
    'width': '100%',
    'height': 'auto'


    })).appendTo($("#eventListTable"));
      /*----------------------------------*/
        // $("<tr/>").append($("<td/>", {
        //   align : "center",
        //   text : data.subject
        // })).append($("<td/>", {
        //   align : "center",
        //   text : data.content
        // })).append($("<td/>", {
        //   align : "center",
        //   text : data.content
        // }).append($("<img/>", {
        // src : data.eventImagePath,
        // 'width': '100%'
        // }))).appendTo($("#eventListTable"));
      /*----------------------------------*/
      // $('#eventNameSpan').text(data.subject);
			// $('#eventContentSpan').text(data.content);
			// $('#eventTimeSpan').text(data.logtime);
			// $('#eventImgSpan').text(data.eventImagePath);

    },
    error : function(err) {
      console.log(err);
    },
  }); // $.ajax
}); // $function