$("#char-enter").on( "keypress", function(event) {
	input = String.fromCharCode(event.which);
	$("#char-log").append(input);
});
