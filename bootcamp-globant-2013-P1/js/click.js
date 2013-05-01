
function clickevent(){
$("#button1").click(function(evento){
     var name = $("#alias").val();
     
     $div = $('<div />').appendTo("#div1");
     $div.attr('id', 'div2');
	   $.ajax({
          url: "http://bootcamp.aws.af.cm/welcome/"+name,
          type: 'GET',
          dataType: 'json',
          context: document.body,
          success: function(data) {
            $div.append(data.response);
            highlight($div, name);
          },
          error: function (xhr, ajaxOptions, thrownError) {
            $div.append("Error from Service");
            $div.addClass("color-red");
          }})

   });
}