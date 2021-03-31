/*
 *
 * Reference article - https://www.toptal.com/nodejs/node-js-error-handling
 *
 */

const winston = require('winston');
require('dotenv').config();

const customLevels = {
  levels: {
    trace: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red',
  },
 };
  
const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;
  
    return `${timestamp} [${level}]: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
    }`;
  }),
 );

const prodTransport = new winston.transports.File({
  filename: 'logs/error.log',
  level: 'error',
  format: formatter
});
const transport = new winston.transports.Console({
  format: formatter,
});

//  logger = winston.createLogger({
//   level: isDevEnvironment() ? 'trace' : 'error',
//   levels: customLevels.levels,
//   transports: [isDevEnvironment() ? transport : prodTransport],
// });

const logger = winston.createLogger({
  level: (process.env.NODE_ENV==="development") ? 'trace' : 'error',
  levels: customLevels.levels,
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    prodTransport,
    transport
  ]// [(process.env.NODE_ENV==="development") ? transport : prodTransport],
});
winston.addColors(customLevels.colors);

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = {
  trace: (msg, meta) => {
    logger.log('trace', msg, meta);
  },
  debug: (msg, meta) => {
    logger.debug(msg, meta);
  },
  info: (msg, meta) => {
    logger.info(msg, meta);
  },
  warn: (msg, meta) => {
    logger.warn(msg, meta);
  },
  error: (msg, meta) => {
    logger.error(msg, meta);
  },
  fatal: (msg, meta) => {
    logger.log('fatal', msg, meta);
  }
};