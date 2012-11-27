## Presentator

A node.js module for creating presentations, and viewing them on multiple computers.

It's just started, so there's a long way to go...!

#### Using
`` var pres  = require('presentator');
var app = pres.init(presentationdata, 8080);``
The first argument is a javascript data object containing all the data for the presentation. More on this later...
The second argument can override the port to listen on.
This function returns the `express()` app.k

Then, navigate to localhost:8080 (or whatever port you specified) on every client browser, and localhost:8080/master to control the slides.

#### The Presentation Data object
Eventually - once the editor bit's done, this will come automatically. But for now, you need to pass the object in manually.
Also - it may well turn out that this is a terribly inefficient way of doing this, and i will almost certainly change it at a later date, but for now, trust that their may be a reason that i'm doing it this way...
