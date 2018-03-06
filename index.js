var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs = require('fs');

// view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.get('/', function (req, res) {
	res.render('index', {});
});


	app.listen(3000, function() {
		console.log('Server started on Port 3000...')
	})
