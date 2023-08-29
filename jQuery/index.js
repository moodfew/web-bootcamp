$("h1").click(function() {
    $("h1").css("color", "yellow");
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("button").on("click", function() {
	$("h1").toggle();
});