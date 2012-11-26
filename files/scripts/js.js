$(function() {
	currentslide = 0;
	var socket = io.connect('http://localhost/client');

	socket.on('pushframe', function(d) {
		console.log('perform animations');
		console.log(d);
	})
});

