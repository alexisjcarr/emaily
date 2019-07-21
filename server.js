require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("./data/models/User"); // needs to be in this order. models before passport
require("./services/passport");
const authRouter = require("./routers/authRouter");

mongoose.connect(process.env.MONGO_URI);

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.use(authRouter);

module.exports = server;
