"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_singleton_1 = __importDefault(require("./logger-singleton"));
const logger_strategy_1 = __importDefault(require("./logger-strategy"));
const logger_observer_1 = __importDefault(require("./logger-observer"));
const logger = logger_singleton_1.default.getInstance();
logger.log("singleton pattern implemented successfully");
logger_strategy_1.default.start();
logger_observer_1.default.startDemo();
//# sourceMappingURL=app.js.map