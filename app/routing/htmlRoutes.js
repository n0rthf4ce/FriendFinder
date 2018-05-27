const PATH = require("path");

module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(PATH.join(__dirname, "../public/html/survey.html"));
    });
    app.get("*", function (req, res) {
        res.sendFile(PATH.join(__dirname, "../public/html/home.html"));
    });
}