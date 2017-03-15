var express = require('express');
var app = express();
var hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
	res.render('index.hbs');
});

app.get('/math/:operator', function(req, res) {
	console.log(req.params);
	console.log(req.route);
	console.log(req.query);
	if (req.params.operator === "add") {
		var total = parseInt(req.query.num1) + parseInt(req.query.num2);
		res.send(`${req.query.num1} + ${req.query.num2} = ${total}`);
	}
	else if (req.params.operator === "subtract") {
		var total = parseInt(req.query.num1) - parseInt(req.query.num2);
		res.send(`${req.query.num1} - ${req.query.num2} = ${total}`);
	}
	else if (req.params.operator === "multiply") {
		var total = parseInt(req.query.num1) * parseInt(req.query.num2);
		res.send(`${req.query.num1} * ${req.query.num2} = ${total}`);
	}
	else if (req.params.operator === "divide") {
		var total = parseInt(req.query.num1) / parseInt(req.query.num2);
		res.send(`${req.query.num1} / ${req.query.num2} = ${total}`);
	}
	else {
		res.send('Please choose add, subtract, multiply, or divide as your math operator.');
	}
});


app.get('/greeting/:name', function(req, res){
	res.render('greeting', {
//data, firehydrant, stuff are just like setting a variable for the views.
		data: req.query.greeting,//?greeting=junk
		firehydrant: req.params.name, // make sure a comma is after the last.
										// http://localhost:3000/greeting/josh
		stuff: req.query.neon //http://localhost:3000/greeting/josh?greeting=junk&neon=neongreen
	});

});























app.listen(3000);
console.log("We're all good here!");
