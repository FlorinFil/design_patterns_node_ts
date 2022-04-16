interface ILogger {
    log(message: string);
}

class ErrorLogger implements ILogger {
    log(message: string) {
        console.log("error: ", message);
    }
}

class WarningLogger implements ILogger {
    log(message: string) {
        console.log("warning: ", message);
    }
}

class DebugInfoLogger implements ILogger {
    log(message: string) {
        console.log("INFO: ", message);
    }
}

// facade class
class FlorinsSmmartConsole {
    private errrorLogger: ILogger;
    private warningLogger: ILogger;
    private infoLogger: ILogger;

    constructor() {
        this.errrorLogger = new ErrorLogger();
        this.warningLogger = new WarningLogger();
        this.infoLogger = new DebugInfoLogger();
    }

    public logError(message: string) {
        this.errrorLogger.log(message);
    }

    public logWarning(message: string) {
        this.warningLogger.log(message);
    }

    public logInfo(message: string) {
        this.infoLogger.log(message);
    }
}


export default class FacadeDemo {
    public static start = () => {
        console.log("\n\n Facade \n\n");
        
        const smartConsole = new FlorinsSmmartConsole();
        
        smartConsole.logError("error message");
        smartConsole.logWarning("warning message");
        smartConsole.logInfo("information message");
        
        console.log("\n\n #endregion Facade \n\n");
    }
}