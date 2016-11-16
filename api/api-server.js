var express = require('express')
var bodyParser = require('body-parser')
var morgan = require("morgan")
var posts = require("./posts")
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use('', posts);


module.exports = app