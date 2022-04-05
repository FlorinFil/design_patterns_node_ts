interface Log {
    operation(): string;
}

class LogMessageExample implements Log {
    public operation(): string {
        return 'Log_Message';
    }
}

class DecoratedLog implements Log {
    protected component: Log;

    constructor(component: Log) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class LogWithSpace extends DecoratedLog {
    public operation(): string {
        return `\n\n\n(${super.operation()})\n\n\n`;
    }
}

class LogWithStars extends DecoratedLog {
    public operation(): string {
        return `****************************\n(${super.operation()})\n*****************************`;
    }
}

function clientCode(component: Log) {

    console.log(`RESULT: \n${component.operation()}`);

}

export default class DecoratorDemo {
    public static start() {
        const simple = new LogMessageExample();
        console.log('Client: I\'ve got a simple Log Message:');
        clientCode(simple);
        console.log('');
        
        const logMessageWithSpace = new LogWithSpace(simple);
        const LogMessageWithSpaceAndStars = new LogWithStars(logMessageWithSpace);
        console.log('Client: Now I\'ve got a decorated LogMessage:');
        clientCode(LogMessageWithSpaceAndStars);

    }
}
