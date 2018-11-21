// dependencies
var express = require("express");
var path = require("path");
var friendList = require("../data/friends.js");

// Routing 

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res,json(friendList);
    });


    app.post('/api/friends', function(req, res){
        // var user = req.body;
        var matchIndex = 0;
        var matchDifference = 0;

        for (var i = 0; i < friendList.length; i++){

            var totalDifference = 0

            for (var j = 0; j < 10; j++){

                totalDifference += math.abs(friends[i].scores[j] - req.body.scores[j]);
            }

            if(totalDifference < matchDifference){
                matchDifference = totalDifference;
                matchIndex = i;

            } else if(i == 0){
                matchIndex = i;
                matchDifference = totalDifference;
            }
        }

        friends.push(req.body);

        res.json(friends[matchIndex]);
    });
   
};

