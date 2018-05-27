// Dependencies
// =============================================================
const EXPRESS = require("express");
const BODY_PARSER= require("body-parser");
const PATH = require("path");

// Sets up the Express App
// =============================================================
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
APP.use(BODY_PARSER.urlencoded({ extended: false }));
APP.use(BODY_PARSER.json());
APP.use(EXPRESS.static(PATH.join(__dirname, 'app/public')));

require('./app/routing/apiRoutes')(APP);
require('./app/routing/htmlRoutes')(APP);

APP.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
