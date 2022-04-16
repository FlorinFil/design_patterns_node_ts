class Logger {
    prefix: string;
    suffix: string;
    log(msg) {
        console.log(this.prefix, msg, this.suffix);
    }
}

class LoggerBuilder {
    private readonly _logger: Logger;

    constructor() {
        this._logger = new Logger();
    }

    setPrefix(prefix: string) {
        this._logger.prefix = prefix;
        return this;
    }

    setSuffix(suffix: string) {
        this._logger.suffix = suffix;
        return this;
    }

    build(): Logger {
        return this._logger;
    } 
}


export default class BuilderDemo {
    public static start() {
        console.log("\n\nBuilder[0]\n\n")
        const loggerWithDecorations: Logger = 
            new LoggerBuilder()
            .setPrefix("\nLOG: ")
            .setSuffix("</end>\n")
            .build();


        loggerWithDecorations.log("log_message");

        console.log("\n\n end of builder[0] \n\n")
    }
}