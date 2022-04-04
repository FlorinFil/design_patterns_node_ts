
export default class Logger {

    
    private static _instance: Logger;
    
    private constructor() { }
    
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        
        this._instance = new Logger();
        return this._instance;
    }
    


    public logs: Array<{ message: string, timestamp: string }> = [];

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}