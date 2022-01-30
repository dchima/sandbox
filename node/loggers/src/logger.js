import{ createLogger, format, transports } from 'winston';

const {
  combine,
  timestamp,
  label,
  printf
} = format;


const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = (value) => createLogger({
  format: combine(
    label({ label: value }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: `./app.log` })
  ]
});

export default logger;

