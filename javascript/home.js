$( "#home-content-container" ).hover(
  function() {
    $("#home-inner-content").html("");
    $('#home-inner-content').append('<div id="home-image"></div>')
  }, function() {
    $("#home-inner-content").html("hi, i'm<br>rachel");
    $('#home-inner-content').children("div").remove();
  }
);