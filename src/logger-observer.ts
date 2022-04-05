interface ILoggingSubject {
    addLoggingTarget(observer: LoggingTarget): void
    removeLoggingTarget(observer: LoggingTarget): void
    writeLogsToRegisteredLoggingTargets(): void
}

interface ILoggingTarget {
    log(): void
}

class LogsSource implements ILoggingSubject {
    private observers: LoggingTarget[] = [];

    addLoggingTarget(observer: LoggingTarget) {
        this.observers.push(observer);
        console.log("added logging target: ", observer.name);
    }
    
    removeLoggingTarget(observer: LoggingTarget) {
        this.observers = this.observers.filter((element) => {
            return observer.name === element.name
        })
        console.log("removed logging target: ", observer.name);
    }

    writeLogsToRegisteredLoggingTargets() {
        console.log("------notifying observers------");
        this.observers.forEach(observer => {
            observer.log();
        })
        console.log("------notified observers------");
    }
}

class LoggingTarget implements ILoggingTarget {
    constructor(id: string) {
        this.name = id;
    }
    readonly name: string;
    log() {
        console.log(`Message sent for logging to ${this.name} `)
    }
}

export default class OberverDemo {
    static startDemo() {

        const firstObserver = new LoggingTarget(" primul ");
        const secondObserver = new LoggingTarget(" al 2-lea ");

        const subject = new LogsSource();
        
        console.log("\n\n OBSERVER PATTERN Start \n\n")
        subject.addLoggingTarget(firstObserver);
        subject.writeLogsToRegisteredLoggingTargets();
        
        subject.addLoggingTarget(secondObserver);
        subject.writeLogsToRegisteredLoggingTargets();

        subject.removeLoggingTarget(secondObserver);
        subject.writeLogsToRegisteredLoggingTargets();
        console.log("\n\n OBSERVER PATTERN End\n\n")
    }
}