const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json("<h1>It is WOOOOOOOOOOOOOOOOOORking!!!!!!</h1>");
});

module.exports = server;
