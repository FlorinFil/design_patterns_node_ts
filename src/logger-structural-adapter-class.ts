class OldLogger {
    public showMessage(): void {
        console.log("`showMessage` method of OldLogger is being called");
    }
}

interface NewLogger {
    log(): void;
}

class AdapterForUsingOldLoggerAsNewLogger implements NewLogger {
    public log(): void {
        // console.log("Adapter's `showMessage` method is being called");
        var adaptee: OldLogger = new OldLogger();
        adaptee.showMessage();
        console.log("but through the `log` method of the new logger")
    }
}

export default class AdapterClassDemo {
    static start() {

        console.log("\n\n\n #region demo for adapter class \n\n\n")
        const logger = new AdapterForUsingOldLoggerAsNewLogger();
        logger.log();
        console.log("\n\n\n #endregion demo for adapter class \n\n\n")
    }
}


