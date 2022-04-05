interface LoggerFactory {
    createErrorLogger(): AbstractErrorLogger;

    createWarningLogger(): AbstractWarningLogger;
}

class LoggerToApiFactory implements LoggerFactory {
    public createErrorLogger(): AbstractErrorLogger {
        return new ErrorLoggerToApi();
    }
    public createWarningLogger(): AbstractWarningLogger {
        return new WarningLoggerToApi();
    }

}

class LoggerToFileFactory implements LoggerFactory {
    public createErrorLogger(): AbstractErrorLogger {
        return new ErrorLoggerToFile();
    }

    public createWarningLogger(): AbstractWarningLogger {
        return new WarningLoggerToFile();
    }

}

interface AbstractErrorLogger {
    logError(): string;
}


class ErrorLoggerToApi implements AbstractErrorLogger {
    public logError(): string {
        return 'Error for API';
    }
}

class ErrorLoggerToFile implements AbstractErrorLogger {
    public logError(): string {
        return 'Error for File';
    }
}

interface AbstractWarningLogger {

    logWarning(): string;

    /**
     * ...but it also can collaborate with the ProductA.
     *
     * The Abstract Factory makes sure that all products it creates are of the
     * same variant and thus, compatible.
     */
    logImportantWarning(collaborator: AbstractErrorLogger): string;
}

class WarningLoggerToApi implements AbstractWarningLogger {

    public logWarning(): string {
        return 'Sending a warning to an Api';
    }

    public logImportantWarning(collaborator: AbstractErrorLogger): string {
        const result = collaborator.logError();
        return `Very Important! (${result})`;
    }
}

class WarningLoggerToFile implements AbstractWarningLogger {

    public logWarning(): string {
        return 'Writing a warning to a file';
    }

    public logImportantWarning(collaborator: AbstractErrorLogger): string {
        const result = collaborator.logError();
        return `Bold (${result})`;
    }
}

function clientCode(logger: LoggerFactory) {
    const errorLogger = logger.createErrorLogger();
    const warningLogger = logger.createWarningLogger();

    console.log(warningLogger.logWarning());
    console.log(warningLogger.logImportantWarning(errorLogger));
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