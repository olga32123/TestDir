var ORM = require('./services/ORM');
var CRUD = require('./services/CRUD');
var config = require('./config.json');


var express = require('express');
var app = express();

app.use(express.static('../frontend/dist'));

var fallback = require('express-history-api-fallback');
var root = __dirname + '/../frontend/dist'

app.use(require('cookie-parser')());
app.use(require('cookie-session')({
    secret: config.secret
}));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


ORM.init(app, function(e){
	app.use(ORM.middleware);
	
	app.use('/api/products', ORM.REST('products'))

	app.use(fallback('index.html', { root: root }))


	var server = app.listen(7000, function () {
  		var host = server.address().address;
  		var port = server.address().port;

  		console.log('Example app listening at http://%s:%s', host, port);
	});
})