const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const { PORT } = require("./config/keys");

// Enable cores

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Body-Parser configuration

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

const users = require("./routes/users");

//@route   GET /test
//@desc    Test Route
//@access  Public

app.get("/test", (req, res) => {
  res.json("Express Setup for Servicium");
});

// Routes

app.use("/api/users", users);

app.listen(PORT, () => console.log(`Application Running on port ${PORT}`));
