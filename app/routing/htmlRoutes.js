// dependencies
var express = require("express");
var path = require("path");

//Routing 
module.exports = function(app) {
    app.get('/', function(req, res){
        // res.sendFile(path.join(__dirname, "../public/home.html"));
        res.sendFile('home.html', { root: path.join(__dirname, '../public')});
    });

    app.get('/survey', function(req, res) {
        // res.sendFile(path.join(__dirname, "../public/survey.html"));
        res.sendFile('survey.html', { root: path.join(__dirname, '../public')});

    });

    app.get('/', function(req, res){
        res.sendFile('home.html', { root: path.join(__dirname, '../public')});
    });
};