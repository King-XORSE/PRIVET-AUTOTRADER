import winston from "winston";
import { configs } from "@/configs";

const logFormat = winston.format.printf(info => {
  return `${info.timestamp} <${info.level.toUpperCase()}> : ${info.message}`;
});

const transports = [];
if (!configs.isProd) {
  // Console
  transports.push(
    new winston.transports.Console({
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.json(),
        winston.format.label({ label: "express" }),
        winston.format.timestamp({ format: "YYYY/MM/DD HH:mm:ss.SS" }),
        logFormat
      )
    })
  );
} else {
  // File
  transports.push(
    new winston.transports.File({
      filename: `logs/test.log`,
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      format: winston.format.combine(
        winston.format.json(),
        winston.format.label({ label: "express" }),
        winston.format.timestamp({ format: "YYYY/MM/DD HH:mm:ss.SS" }),
        logFormat
      )
    })
  );
}

const LoggerInstance = winston.createLogger({
  level: configs.logs.level,
  levels: winston.config.npm.levels,
  transports
});

export default LoggerInstance;
