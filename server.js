const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
var db = require("./models");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
require("./routes/api/apiRoutes")(app);
require("./routes/api/htmlRoutes")(app);

const port = process.env.PORT || 5000;

var syncOptions = { force: false };
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(port, function() {
    console.log("==> 🌎  Start backend server on port %s", port);
  });
});
