"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogsSource {
    constructor() {
        this.observers = [];
    }
    addLoggingTarget(observer) {
        this.observers.push(observer);
        console.log("added logging target: ", observer.name);
    }
    removeLoggingTarget(observer) {
        this.observers = this.observers.filter((element) => {
            return observer.name === element.name;
        });
        console.log("removed logging target: ", observer.name);
    }
    writeLogsToRegisteredLoggingTargets() {
        console.log("------notifying observers------");
        this.observers.forEach(observer => {
            observer.log();
        });
        console.log("------notified observers------");
    }
}
class LoggingTarget {
    constructor(id) {
        this.name = id;
    }
    log() {
        console.log(`Message sent for logging to ${this.name} `);
    }
}
class OberverDemo {
    static startDemo() {
        const firstObserver = new LoggingTarget(" primul ");
        const secondObserver = new LoggingTarget(" al 2-lea ");
        const subject = new LogsSource();
        console.log("\n\n OBSERVER PATTERN Start \n\n");
        subject.addLoggingTarget(firstObserver);
        subject.writeLogsToRegisteredLoggingTargets();
        subject.addLoggingTarget(secondObserver);
        subject.writeLogsToRegisteredLoggingTargets();
        subject.removeLoggingTarget(secondObserver);
        subject.writeLogsToRegisteredLoggingTargets();
        console.log("\n\n OBSERVER PATTERN End\n\n");
    }
}
exports.default = OberverDemo;
//# sourceMappingURL=logger-observer.js.map