import Logger  from "./logger-singleton";
import LoggerDemo from "./logger-strategy";
import ObserverDemo from "./logger-observer";
const logger = Logger.getInstance();

logger.log("singleton pattern implemented successfully");

LoggerDemo.start();

ObserverDemo.startDemo();    