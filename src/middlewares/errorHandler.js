const { INTERNAL_SERVER_ERROR } = require('http-status-codes').StatusCodes;
const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

module.exports = async (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(BAD_REQUEST).json(
      { message: 'Invalid entries. Try again.' },
    );
  }

  if (err.type) return res.status(err.code).json({ message: err.message });

  return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error.' });
};