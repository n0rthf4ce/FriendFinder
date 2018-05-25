/*Your apiRoutes.js file should contain two routes:



A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

var friends =
    [
        {
            "name": "Ahmed",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
            "scores": [
                "5",
                "1",
                "4",
                "4",
                "5",
                "1",
                "2",
                "5",
                "4",
                "1"
            ]
        },
        {
            "name": "Jacob Deming",
            "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
            "scores": [
                "4",
                "2",
                "5",
                "1",
                "3",
                "2",
                "2",
                "1",
                "3",
                "2"
            ]
        }
    ]


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        res.json(friends);
    });
}