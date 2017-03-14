var express = require('express'); // Loading express on our server.
var app = express();// install express on out server
var hbs = require('hbs'); // loads handlebars

//Express uses app, use, get, you can change this 'app' to be anything, leave as default.
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){

	res.send('Hello');
});

app.get('/shows', function(req, res){
	var faveShows = ['Planet Earth', 'Family Guy', 'ESPN', 'The Daily Show', 'SNL'];

	res.render('shows', {
		data: faveShows  // Rednder the shows hbs
	});

});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('On port ' + port);
})
