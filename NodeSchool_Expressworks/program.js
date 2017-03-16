
var express = require('express');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));


app.get('/home', function(req, res) {
	res.end('Hello World!');
});


//Static Files

// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

//Good Old Form

app.post('/form', function(req, res) {
	res.end(req.body.str.split('').reverse().join(''));
});

// Param Pam Pam
app.put('/message/:id', function(req, res){
	var id = req.params.id
    var str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');
    res.end(str);
});

// What's in Query
app.get('/search', function(req, res){
	var query = req.query

	res.send(query)
});


app.listen(process.argv[2] || 3000);

// app.listen(process.argv[2]);
//Hello World - Josh Seipel

// var express = require('express');
// var app = express();
// app.get('/home', function(req, res) {
// 	res.end('Hello World!');
// });
// app.listen(process.argv[2]);

//
