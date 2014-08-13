function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomOverlay(){
	console.log('find a random overlay');
	var newColor = getRandomColor();
	var p = $("#background-overlay").css("background-color", newColor);
	// p.hide(100).show(100);
	console.log(newColor);
}


$( "#home-content-container" ).hover(
  function() {
    $("#home-inner-content").html("");
    $('#home-inner-content').append('<div id="home-image"></div>')
  }, function() {
    $("#home-inner-content").html("hi, i'm<br>rachel");
    $('#home-inner-content').children("div").remove();
  }
);

$( "#home-content-container" ).hover(function(){
	randomOverlay()
});



// setInterval(randomOverlay, 2500);

// var p = $("#background-overlay").css("background-color", "yellow");
// p.hide(1500).show(1500);
// p.queue(function() {
//   p.css("background-color", "red");
// });
