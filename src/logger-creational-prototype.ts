interface IProtoType {
    clone(): this
}

class LoggerWithPrefix implements IProtoType {
    prefix: any

    constructor(prefix: any) {
        this.prefix = prefix 
    }

    clone() {
        return Object.assign({}, this) // shallow copy
        // return JSON.parse(JSON.stringify(this)); //deep copy
    }
}

export default class PrototypeDemo{
    static start() {

        console.log("\n\n\n Prototype test \n\n\n")

        const OBJECT1 = new LoggerWithPrefix('just_a_prefixForLogger_')
        console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`)
        
        const OBJECT2 = OBJECT1.clone() // Clone
        console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}\n`)
        // Depending on your clone method, either a shallow or deep copy was performed
        OBJECT2.prefix = "new_PrefixForLogger_";
        
        console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`)
        console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`)

        console.log("\n\n end of prototype test \n\n")
    }
}
