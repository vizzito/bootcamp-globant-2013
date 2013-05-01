function buttonNameHandler(){
  $("#button-animation").click(function(e) {
  $("#alias").focus();

  hideLoadingByEscape();
  var name = $("#alias").val(); 
  $div = $('<div />').appendTo("#div-content");
  $div.attr('id', 'newDiv');
  showAnimation();
   $.ajax({
        url: "http://bootcamp.aws.af.cm/welcome/"+name,
        success: function(data) {
          $div.text(data.response);
          highlight($div, name);
         // $.mobile.loading( 'hide');
        },
        error: function (xhr, ajaxOptions, thrownError) {
          $div.text("Error from Service");
          $div.addClass("color-red");
         // $.mobile.loading( 'hide');
        }})
 });
}

function showAnimation() {
  $.mobile.loading( 'show', {
    text: 'loading',
    textVisible: true,
    theme: 'z',
    html: ""
    });
}

function hideLoadingByEscape(){
  $('#first-page').keydown(function(e){
    if(e.which == 27){
      $.mobile.loading( 'hide' );
      }
    });
}