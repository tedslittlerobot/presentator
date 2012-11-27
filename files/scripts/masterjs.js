
$(function() {
	var socket_master = io.connect('http://localhost/mastersocket');
	
	$controller = $('.controller');
	
	maintimercount = 0;
	slidetimercount = 0;
	$maintimer = $('.maintimer', $controller);
	$slidetimer = $('.slidetimer', $controller);

	$('button.prevslide', $controller).on('click', function(e) {
		socket_master.emit('pushframe', { 'frame': 1 });
		slidetimercount = 0;
	});
	$('button.nextslide', $controller).on('click', function(e) {
		socket_master.emit('pushframe', { frame : 2 });
		slidetimercount = 0;
	});
	
	setInterval(function() {
		maintimercount++;
		slidetimercount++;
		$maintimer.text(timeToString(maintimercount));
		$slidetimer.text(timeToString(slidetimercount));
	}, 1000);
	
	timeToString = function(seconds) {
		var s = seconds % 60;
		var m = Math.floor(seconds / 60);
		var h = Math.floor(m / 60);
		if (h > 0) {
			m = m%60;
			return h+":"+m+":"+s;
		}
		if (m > 0)
			return m+":"+s;
		return s;
	}
	
});

