Presentator
===========

A node.js module for creating presentations, and displaying them them on multiple computers, while controlling them on yours.

It's just started, so there's a long way to go...!

Using
-----

The tester.js module is an example of how to use it - run `node tester.js`, then point a browser page at localhost:8080, and another at localhost:8080/master
The master page will have a previous and next slide button on the right hand side - clicking these will toggle between the first and second slides. they only have a few words at the moment, so it's not all that exciting, but it shows proof of concept - changeing slides on the master pushes the same thing out to the clients.


Things to do:
-------------
+ stage animations rather than triggering each element individually
+ add more animation parameters (currently just x and y positions - add width, height, opacity, etc.)
+ animation stages - for animations inside the same slide
+ replace jquery calls

