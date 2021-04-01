// const HttpStatusCode = {
//   OK: 200,
//   BAD_REQUEST: 400,
//   NOT_FOUND: 404,
//   INTERNAL_SERVER: 500
// };

const logger = require('../logger');

module.exports = (error, req, res, next) => {

  let HttpStatusCode = 400;

  logger.error(error.message, {
    stack: error.stack
  });

  res.status(HttpStatusCode).send({
    status: false,
    code: HttpStatusCode,
    error: error.message
  });
}
/*
{
    type: 'error',
    status: 404,
    message: 'Not Found'
    data: {...} // optional
}
*/