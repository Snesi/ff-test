var express = require('express')
var bodyParser = require('body-parser');
var posts = require("./posts")
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', posts);


module.exports = app