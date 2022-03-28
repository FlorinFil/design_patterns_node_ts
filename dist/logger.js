"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor() {
        this.logs = [];
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new Logger();
        return this._instance;
    }
    get count() {
        return this.logs.length;
    }
    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map