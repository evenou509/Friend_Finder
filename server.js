// Dependencies 
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// set up express 
var app = express();
var PORT = process.env.PORT || 3000;

// set up the express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


// listen 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});