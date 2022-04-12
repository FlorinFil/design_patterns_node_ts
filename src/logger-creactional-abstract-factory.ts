interface LoggerFactory {
    createErrorLogger(): AbstractErrorLogger;

    createWarningLogger(): AbstractWarningLogger;

    createInfoLogger(): AbstractInfoLogger;
}

class LoggerToApiFactory implements LoggerFactory {
    public createErrorLogger(): AbstractErrorLogger {
        return new ErrorLoggerToApi();
    }
    public createWarningLogger(): AbstractWarningLogger {
        return new WarningLoggerToApi();
    }
    public createInfoLogger(): AbstractInfoLogger {
        return new InfoLoggerToApi();
    }

}

class LoggerToFileFactory implements LoggerFactory {
    public createErrorLogger(): AbstractErrorLogger {
        return new ErrorLoggerToFile();
    }

    public createWarningLogger(): AbstractWarningLogger {
        return new WarningLoggerToFile();
    }

    public createInfoLogger(): AbstractInfoLogger {
        return new InfoLoggerToFile();
    }

}

interface AbstractErrorLogger {
    logError(): string;
}


class ErrorLoggerToApi implements AbstractErrorLogger {
    public logError(): string {
        return 'Sending Error for API';
    }
}

class ErrorLoggerToFile implements AbstractErrorLogger {
    public logError(): string {
        return 'Writing Error for File';
    }
}

interface AbstractWarningLogger {

    logWarning(): string;

    // Sorry, I have no idea how to make interact the error, warning and/or info. Because I don't need a warning to be shown as error or anything similar.
    // logImportantWarning(collaborator: AbstractErrorLogger): string;
}

class WarningLoggerToApi implements AbstractWarningLogger {

    public logWarning(): string {
        return 'Sending a warning to an Api';
    }

}

class WarningLoggerToFile implements AbstractWarningLogger {

    public logWarning(): string {
        return 'Writing a warning to a file';
    }

    // public logImportantWarning(collaborator: AbstractErrorLogger): string {
    //     const result = collaborator.logError();
    //     return `Bold (${result})`;
    // }
}

interface AbstractInfoLogger {

    logInfo(): string;

}

class InfoLoggerToApi implements AbstractInfoLogger {

    public logInfo(): string {
        return 'Sending info to an Api';
    }

}

class InfoLoggerToFile implements AbstractInfoLogger {

    public logInfo(): string {
        return 'Writing info to a file';
    }

}

function clientCode(loggerFactory: LoggerFactory) {
    const errorLogger = loggerFactory.createErrorLogger();
    const warningLogger = loggerFactory.createWarningLogger();
    const infoLogger = loggerFactory.createInfoLogger();

    console.log(warningLogger.logWarning());
    // console.log(warningLogger.logImportantWarning(errorLogger));
    console.log(errorLogger.logError());
    console.log(infoLogger.logInfo());
}

export default class AbstractFactoryDemo {
    static start() {
        console.log('Client: Testing client code with the Api Logger...');
        clientCode(new LoggerToApiFactory());
        
        console.log('');
        
        console.log('Client: Testing the same client code with the File logger...');
        clientCode(new LoggerToFileFactory());

    }
}