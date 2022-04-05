abstract class LoggerCreator {
    public abstract getLogger(): Logger;
    public provideLogs(): string {
        const product = this.getLogger();
        return `Providing Logs: ${product.getLog()}`;
    }
}

class CreatorOfLoggerForFile extends LoggerCreator {
    public getLogger(): Logger {
        return new LoggerForFile();
    }
}

class CreatorOfLoggerForAPI extends LoggerCreator {
    public getLogger(): Logger {
        return new LoggerForAPI();
    }
}

class CreatorOfLoggerForConsole extends LoggerCreator {
    public getLogger(): Logger {
        return new LoggerForConsole();
    }
}

interface Logger {
    getLog(): string;
}

class LoggerForFile implements Logger {
    public getLog(): string {
        return '{Log Message Writes to a File}';
    }
}
class LoggerForConsole implements Logger {
    public getLog(): string {
        return '{Log Message Writes to Console}';
    }
}

class LoggerForAPI implements Logger {
    public getLog(): string {
        return '{Log Message is being sent over HTTPS}';
    }
}

function createLoggerForLogsHistory(creator: LoggerCreator) {
    // ...
    console.log('            no matter what class is used to create the logger.');
    console.log(creator.provideLogs());
    // ...
}

export default class FactoryMethodDemo {
    static start() {
        console.log('Creating Logger For History using Logger that logs to file.');
        createLoggerForLogsHistory(new CreatorOfLoggerForFile());
        console.log('');
        
        console.log('Creating Logger For History using Logger that logs to API.');
        createLoggerForLogsHistory(new CreatorOfLoggerForAPI());
        console.log('');
        
        console.log('Creating Logger For History using Logger that logs to Console.');
        createLoggerForLogsHistory(new CreatorOfLoggerForConsole());
    }
}
