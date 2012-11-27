
/* INIT */

var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    url = require('url');
var presdata = {};

/* SETUP */
app.configure(function() {
	app.use(express.logger());
	app.set('view engine', 'jade');
	app.set('views', __dirname+'/views');
	app.use(require('express').static(__dirname+'/files'));
});

/* ROUTING */

app.get('/', function(req,res) {
	res.render('client.jade', { message: 'this is a message', title: presdata.name });
});
app.get('/master', function(req, res) {
	res.render('master.jade', { title: "(m) "+presdata.name  } );
});

/* WEBSOCKETS */

var io_clients = io.of('/clientsocket').on('connection', function(socket) {
	socket.emit('load presentation', presdata);
	socket.on('disconnect', function() {
	});
});

var io_master = io.of('/mastersocket').on('connection', function(socket) {
	socket.on('pushframe', function(d) {
		io_clients.emit('pushframe', d);	
	});	
	socket.on('disconnect', function() {
	});
});

/* EXPORTS */

exports.init = function(presentation, port) {
	if (!port) port = 8080;
	if (!presentation) return false;
	presdata = presentation;
	server.listen(8080);
	return app;
}


