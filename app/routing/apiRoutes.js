var friends=require("../data/friends");
var diff = 10000, newDiff, bestFriendName, bestFriendURL;

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        const NEW_SCORES = req.body["scores[]"];

        friends.forEach(function (user) {
            newDiff = 0;
            const SCORES = user["scores[]"];
            for (let i = 0; i < SCORES.length; i++) {
                newDiff += Math.abs(SCORES[i] - NEW_SCORES[i]);
            };
            if (diff > newDiff) {
                diff = newDiff;
                bestFriendName = user.name;
                bestFriendURL = user.photo;
            }
        });
        console.log(diff, bestFriendName, bestFriendURL);
        friends.push(req.body);
        res.json({
            name:bestFriendName,
            url: bestFriendURL
        });
    });
}