var express = require('express');//Loading express on our server
var app = express();//install express on our server
//save an express module as 'app'
var hbs = require('hbs');//loads handlebars
var port = 3000;
//tells the server to listen for requests on port 3000
app.listen(port, function(){
	console.log("=======================");
	console.log('Listening on port...' + port);
	console.log("=======================");
});

app.set('view engine', 'hbs');//Tells Express what to use for rendering templates.
app.set('views', './views');
app.use(express.static(__dirname + '/public')); //Very important!! Make sure to add a '/'.

app.get('/', function(req, res){
	res.render('layout.hbs');
});


app.get('/topping/:type', function(req, res, next){
	res.render('toppings.hbs', {
		topping: "pepperoni"
	});
});

app.get('/order/:amount/:size', function(req, res, next){
	res.render('order.hbs', {
		order: "Two",
		message: "Large"
	});
});

app.get('/*', function(req, res, next){
	res.render('404.hbs', {
		message: "404",
		page: "Page Not Found"
	});
});


console.log("We're all connected here!");
