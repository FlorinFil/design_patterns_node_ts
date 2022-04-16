interface ICustomConsole {
    log(message: string);
}

class SimpleConsole implements ICustomConsole {
    log(msg: string) {
        console.log(msg);
    }
}
// Proxy
class LoudConsole {

    private customConsole: ICustomConsole;
    constructor (customConsole: ICustomConsole) {
        this.customConsole = customConsole;
    }
    // private simpleConsole: SimpleConsole;

    log(message) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.customConsole.log(message);
        console.log( "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
}

function writeMessageWithConsole(message: string, customConsole: ICustomConsole) {
    customConsole.log(message);
}

export default class ProxyDemo {
    public static start = () => {

        console.log("\n\n #region proxy \n\n");

        const message = "message_to_be_shown";

        console.log("logging message with simple console");
        const simpleConsole = new SimpleConsole();
        writeMessageWithConsole(message, simpleConsole);


        console.log('logging message with a proxy console (Loud console will be used)');
        const proxyConsole = new LoudConsole(simpleConsole);
        writeMessageWithConsole(message, proxyConsole);


        console.log("\n\n #endregion proxy \n\n");
    }
}