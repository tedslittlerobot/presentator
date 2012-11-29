Presentator
===========

A node.js module for creating presentations, and displaying them them on multiple computers, while controlling them on yours.

It's just started, so there's a long way to go...!

Using
-----

Firstly, add the `express`, `socket.io` and `jade` modules' latest versions.

	npm install express socket.io jade

(i've .gitignored them because at least one of them needs to `make` some files.


The tester.js module is an example of how to use it - run `node tester.js`, then point a browser page at 
	localhost:8080
and another at
	localhost:8080/master
The master page will have a previous and next slide button on the right hand side - clicking these will toggle between the first and second slides. they only have a few words at the moment, so it's not all that exciting, but it shows proof of concept - changeing slides on the master pushes the same thing out to the clients.


Things to do:
-------------
+ stage animations rather that doing it the jQuery way (triggering a separate timer for each element)
+ add more animation parameters (currently just x and y positions - add width, height, opacity, etc.)
+ add animation phases inside slides.
+ replace all jquery 
+ GUI editor for the presentation.json file, image uploader etc. so that it's fairly intuitive to make a presentation.

