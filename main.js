
var express, require("express"),
    app = require("express")(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    url = require('url');

app.configure(function() {
	app.use(require('express').logger());
	app.set('view engine', 'jade');
	app.set('views', __dirname+'/views');
	app.use(require('express').static(__dirname+'/files'));
});



app.get('/', function(req,res) {
	res.render('client.jade', { message: 'this is a message', title: 'Presentation thing' });
});


server.listen(8080);

