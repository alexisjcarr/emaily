require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./data/models/User"); // needs to be in this order. models before passport
require("./services/passport");
const authRouter = require("./routers/authRouter");

mongoose.connect(process.env.MONGO_URI);

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use(authRouter);

module.exports = server;
