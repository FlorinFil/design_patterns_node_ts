import Logger  from "./logger-creational-singleton";
import LoggerDemo from "./logger-behavioral-strategy";
import ObserverDemo from "./logger-behavioral-observer";
import DecoratorDemo from "./logger-structural-decorator";
import FactoryMethodDemo from "./logger-creational-factory-method";
const logger = Logger.getInstance();

logger.log("singleton pattern implemented successfully");

LoggerDemo.start();

ObserverDemo.startDemo();    

DecoratorDemo.start();  

FactoryMethodDemo.start();