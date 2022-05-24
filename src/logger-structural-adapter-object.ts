
class OldGenerationLogger {
    public writeMessage() {
        console.log('1850 \nwriting old format message \n1850');
    }
}

class NewGenerationLogger {
    public log() {
        console.log('2022 \nwriting a Contemporan format message \n2022');
    }
}

class AdapterForUsingNewGenerationLogger extends NewGenerationLogger {
    private adaptee: OldGenerationLogger;

    constructor(adaptee: OldGenerationLogger) {
        super();
        this.adaptee = adaptee;
    }

    public log() {
        console.log("2022")
        this.adaptee.writeMessage();
        console.log("2022");
    }
}

export default class AdapterObjectDemo {
    
    static start() {
        function clientCode(modernLogger: NewGenerationLogger) {
            modernLogger.log()
        }

        console.log("\n\n\n starting demo for adapter (object)\n\n\n")
        
        
        console.log('Client: I like new generation logger formats:');
        const target = new NewGenerationLogger();
        clientCode(target);
        
        const adaptee = new OldGenerationLogger();
        console.log('\nClient: The Adaptee class has an old interface.');
        adaptee.writeMessage();
        
        console.log('\nClient: But I can make it look good via the Adapter:');
        const adapter = new AdapterForUsingNewGenerationLogger(adaptee);
        clientCode(adapter);
        
        console.log("\n\n\n end of demo for adapter (object)\n\n\n")
    }
}


