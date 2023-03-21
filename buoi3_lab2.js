var http = require('http');
var fs = require('fs');
var caculator = require('./caculator');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/buoi3_lab2.html');
});
app.post('/tinhtong', function (req, res) {
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    res.send(caculator.AddANumber(a, b) + "");
})
app.listen(8080, function () { });