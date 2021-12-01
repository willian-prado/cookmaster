const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');

module.exports = rescue(async (req, res, _next) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).end();
});