import Logger  from "./logger-creational-singleton";
import LoggerDemo from "./logger-behavioral-strategy";
import ObserverDemo from "./logger-behavioral-observer";
import DecoratorDemo from "./logger-structural-decorator";
import FactoryMethodDemo from "./logger-creational-factory-method";
import AbstractFactoryDemo from "./logger-creactional-abstract-factory";
import BuilderDemo from "./logger-creational-builder";
import FacadeDemo from "./logger-structural-facade";
import ProxyDemo from "./logger-structural-proxy";
const logger = Logger.getInstance();

logger.log("singleton pattern implemented successfully");

LoggerDemo.start();

ObserverDemo.startDemo();    

DecoratorDemo.start();  

FactoryMethodDemo.start();

AbstractFactoryDemo.start();

BuilderDemo.start();    

FacadeDemo.start();

// Flyweight - when we need some kind of a database in our RAM, but with reduced memory usage, so we create a kind of a relational database in our RAM (instead of a kind of a nonrelational(documents) DB).
// looks like somthing simlar o the way Java treats the String class

ProxyDemo.start();