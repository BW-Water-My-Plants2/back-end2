const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const db = require("../data/dbConfig.js");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const plantsRouter = require("../plants/plants-router.js.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/plants", authenticate, plantsRouter);

module.exports = server;
