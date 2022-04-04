interface ILogger {
    log(message: string);
}

class LoggerToFile implements ILogger {
    log(message: string) {
        console.log("\n\nopening a file or creating if it doesn't exist");
        console.log("I'm writing to console :), but please consider that I log into a file the message: ", message);
        console.log("closing the file\n\n");
    }
}

class LoggerToConsole implements ILogger {
    log(message: string) {
        console.log("\n\nconsole logger logging to console: ", message);
    }
}

class LoggerToAPI implements ILogger {
    log(message: string) {
        console.log("\n\npretending to preparing an https request.");
        console.log("I'm writing to console :), but Please, let's pretend I'm sending to an API through an HTTPS Request, the message: ", message);
    }
}

class LoggingService {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    } 

    public log(message: string) {
        this.logger.log(message);
    }
}

export default class LoggerDemo {
    public static start(message: string[] = ["message1", "message2", "message3"]) {

        console.log("\n\n Strategy PAttern Logger Demo Starts Here: \n\n")
        let loggingService = new LoggingService(new LoggerToFile());
        loggingService.log("MessageForFile");
        
        loggingService = new LoggingService(new LoggerToConsole());
        loggingService.log("MessageForConsole");
        
        loggingService = new LoggingService(new LoggerToAPI());
        loggingService.log("MessageForAPI");
        
        console.log("\n\n Strategy PAttern Logger Demo ends Here: \n\n")
    }
}
