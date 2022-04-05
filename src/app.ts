import Logger  from "./logger-singleton";
import LoggerDemo from "./logger-strategy";
import ObserverDemo from "./logger-observer";
import DecoratorDemo from "./logger-decorator";
const logger = Logger.getInstance();

logger.log("singleton pattern implemented successfully");

LoggerDemo.start();

ObserverDemo.startDemo();    

DecoratorDemo.start();  