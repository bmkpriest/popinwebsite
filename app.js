var express = require("express");
var app = express();
var ejs = require("ejs");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var path = require('path');

mongoose.connect("mongodb://localhost/popin-site");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.join(__dirname, '/public')));''
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

//Home Page
app.get("/", function(req, res){
  res.render("index");
});

// SERVER PORT LOCAL AND DEV ENVIRONMENT
// app.listen(8000, function (){
//   console.log("SERVER RUNNING ON PORT 8000");
// });

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("PopIn Has Started");
});
