const ru = {
    "hello": "privet"
}
const ro = {
    "hello": "salut"
}

const languages = {
    ro,
    ru
}

export interface LanguageState {
    translate(code: string): string;
}

export class RomanianState implements LanguageState {
    public translate(code: string): string {
        return languages['ro'][code];
        // console.log("`handle` method of ConcreteStateA is being called!");
        // context.State = new RussianState();
    }
}

export class RussianState implements LanguageState {
    // public readonly languageCode = 'ru'
    public translate(code: string): string {
        return languages['ru'][code];
        // console.log("`handle` method of ConcreteStateB is being called!");
        // context.State = new RomanianState();
    }
}

export class Context {
    private langState: LanguageState;

    constructor(state: LanguageState) {
        this.langState = state;
    }

    get LangState(): LanguageState {
        return this.langState;
    }

    set LangState(state: LanguageState) {
        this.langState = state;
    }

    public showMessage(message: string): void {
        // console.log("request is being called!");
        console.log(this.langState.translate(message));
    }
}


export function show(): void {
    const ruState = new RussianState();
    const roState = new RomanianState();
    var context: Context = new Context(roState);
    console.log("created context with romanian state");
    context.showMessage("hello");

    context.LangState = ruState;

    console.log("switched state to russian state");
    context.showMessage('hello');

    context.LangState = roState;
    console.log("switched state to romanian state");
    context.showMessage('hello');

}
show();

export default class StateDemo {
    public static start = () => {

        console.log("\n\n#region state\n\n")

        show();

        console.log("\n\n #endregion state\n\n")
    }
}