// dependencies
var express = require("express");
var path = require("path");
var friendList = require("../data/friends.js");

// Routing 

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res,json(friendList);
    });

    var matchUserTotalScore = 0;

    var friendScore = [];


    app.get('/api/friends', function(req, res) {
        var currentUserScores = req.body.scores;

        console.log("Current user scores: " + currentUserScores);

        for (var i = 0; i < friendList.length; i++) {

            var matchUserScores = friendList[i].scores;

            matchUserTotalScore = calculateUserCompatibilityScore(currentUserScores, matchUserScores);

            friendScore.push(matchUserTotalScore);
    
        }

        console.log("Array of friend scores: " + friendScore);

        var index = 0;
        var value = friendScore[0];

        for (var i = 0; i < friendScore.length; i++) {
            console.log("Value of item in array: " + friendScore[i]);

            if (friendScore[i] < value) {
                value = friendScore[i];
                index = i;
            }
        }

        console.log("Best friend name: " + friendList[index].name);

        res,send(friendList[index]);

        friendList.push(req.body);
    });
};

var totalDifference = 0;

function calculateUserCompatibilityScore(currentUserScores, matchUserScores) {
    totalDifference = 0;

    for(var i = 0; i < currentUserScores.length; i++) {

        totalDifference += Math.abs(currentUserScores[i] - matchUserScores[i]);

    }

    console.log("Final total difference for friend: " + totalDifference);

    return totalDifference;
}