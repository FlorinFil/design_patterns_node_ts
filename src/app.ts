import Logger  from "./logger-creational-singleton";
import LoggerDemo from "./logger-behavioral-strategy";
import ObserverDemo from "./logger-behavioral-observer";
import DecoratorDemo from "./logger-structural-decorator";
import FactoryMethodDemo from "./logger-creational-factory-method";
import AbstractFactoryDemo from "./logger-creactional-abstract-factory";
import BuilderDemo from "./logger-creational-builder";
const logger = Logger.getInstance();

logger.log("singleton pattern implemented successfully");

LoggerDemo.start();

ObserverDemo.startDemo();    

DecoratorDemo.start();  

FactoryMethodDemo.start();

AbstractFactoryDemo.start();

BuilderDemo.start();    