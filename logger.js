/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({filename: "logfile.log"}),
  ],
});

// eslint-disable-next-line linebreak-style
module.exports = logger;
