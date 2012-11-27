$(function() {
	$slides = $('.slides');

	$currentslide = $('none');
	$nextslide = $('none');
	var socket_client = io.connect('http://localhost/clientsocket');

	var loadPresentation = function(d) { // d stands for data - it contains all the presentation data initially passed to node
		console.log('loading presentation: '+d.name);
		prescontents = ""; // variable to hold the html code to be inserted into the document
		$slides.html(""); // reset current presentation, and remove all data from document
		for (var xi = 0; xi < d.slides.length; xi++) {
			/* LOAD SLIDE */
			var slide = d.slides[xi]; // a temporary reference to the currently iterating slide
			var slidecontents = ""; // a buffer for the contents of the current slide
			for (var xii = 0; xii < slide.objects.length; xii++) {
				var object = slide.objects[xii]; // a tmp reference to the currently iterating object
				switch (object.type) {
					case "text":  /* TEXT OBJECT */
					default:
						slidecontents += '<div ';
						slidecontents += 'id="'+object.name+'" ';
						slidecontents += 'class="slide-object slide-text-object" ';
						slidecontents += 'style="';
							slidecontents += 'left: '+object.xstart+';';
							slidecontents += 'top: '+object.ystart+';';
						slidecontents += '" ';
						slidecontents += 'pres-x="'+object.x+'" ';
						slidecontents += 'pres-y="'+object.y+'" ';
						slidecontents += 'pres-xstart="'+object.xstart+'" ';
						slidecontents += 'pres-ystart="'+object.ystart+'" ';
						slidecontents += 'pres-xend="'+object.xend+'" ';
						slidecontents += 'pres-yend="'+object.yend+'" ';
						slidecontents += '>'+object.content+'</div>';
						break;
				}
			}
			prescontents += '<div class="slide" id="'+(xi+1)+'" slide-name="'+slide.name+'">'+slidecontents+'</div>'; // add slide to presentation
			/* END LOAD SLIDE */
		}
		$slides.html(prescontents);
	}
	socket_client.on('load presentation', loadPresentation);


	var currentSlideAnimOut = function() {
		if (!$currentslide) return;

		$currentslide.children('.slide-object').each(function() {
			$(this).animate({
				left: $(this).attr('pres-xend'),
				top: $(this).attr('pres-yend')
			});
		});
	}
	var nextSlideAnimIn = function() {
		if (!$nextslide) return;

		$nextslide.children('.slide-object').each(function() {
			$(this).css('left', $(this).attr('pres-xstart'));
			$(this).css('top', $(this).attr('pres-ystart'));
			$(this).animate({
				left: $(this).attr('pres-x'),
				top: $(this).attr('pres-y')
			}, 1000, function() {
				$currentslide = $nextslide;
			});
		});

	}
	socket_client.on('pushframe', function(d) {
		if ($currentslide && d.frame == $currentslide.attr('id')) return;
		$nextslide = $('.slides').children('#'+d.frame);
		currentSlideAnimOut();
		nextSlideAnimIn();
	});
});

