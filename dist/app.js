"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Logger = require("../src/logger");
const logger_1 = __importDefault(require("./logger"));
const logger = logger_1.default.getInstance();
logger.log("singleton pattern implemented successfully");
//# sourceMappingURL=app.js.map