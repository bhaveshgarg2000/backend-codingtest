/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
"use strict";

const express = require("express");
const app = express();
const port = 8010;

const bodyParser = require("body-parser");
// const logger = require("logger");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

const buildSchemas = require("./src/schemas");

const logger = require("./logger");

logger.info("This is an info message");
logger.error("This is an error message");

db.serialize(() => {
  buildSchemas(db);

  const app = require("./src/app")(db);

  app.listen(port, () =>
    console.log(`App started and listening on port ${port}`)
  );
});
