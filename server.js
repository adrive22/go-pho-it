var express = require('express');
var bodyParser= require('body-parser');


var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/pho_controller.js');

app.use(routes);

app.listen(port, function(err) {
  if (err){
    console.log(error);
  }
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port);
  });