"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoggerToFile {
    log(message) {
        console.log("\n\nopening a file or creating if it doesn't exist");
        console.log("I'm writing to console :), but please consider that I log into a file the message: ", message);
        console.log("closing the file\n\n");
    }
}
class LoggerToConsole {
    log(message) {
        console.log("\n\nconsole logger logging to console: ", message);
    }
}
class LoggerToAPI {
    log(message) {
        console.log("\n\npretending to preparing an https request.");
        console.log("I'm writing to console :), but Please, let's pretend I'm sending to an API through an HTTPS Request, the message: ", message);
    }
}
class LoggingService {
    constructor(logger) {
        this.logger = logger;
    }
    log(message) {
        this.logger.log(message);
    }
}
class LoggerDemo {
    static start(message = ["message1", "message2", "message3"]) {
        console.log("\n\n Strategy PAttern Logger Demo Starts Here: \n\n");
        let loggingService = new LoggingService(new LoggerToFile());
        loggingService.log("MessageForFile");
        loggingService = new LoggingService(new LoggerToConsole());
        loggingService.log("MessageForConsole");
        loggingService = new LoggingService(new LoggerToAPI());
        loggingService.log("MessageForAPI");
        console.log("\n\n Strategy PAttern Logger Demo ends Here: \n\n");
    }
}
exports.default = LoggerDemo;
//# sourceMappingURL=logger-strategy.js.map