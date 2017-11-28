var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

//specify the port
var port = 3006;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//create route (if applicable)

var cookies = []

//push input from form to var cookies
//create for loop cookies.length[i] for cookies array
//append new strings from cookies array to document




app.listen(port, function() {
  console.log("listening on port", port);
});