import Logger  from "./logger-singleton";
import LoggerDemo from "./logger-strategy";

const logger = Logger.getInstance();

logger.log("singleton pattern implemented successfully");

LoggerDemo.start();