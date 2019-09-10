type Action = "PATH" | "FOOD" | "WHSL";

export default class BleManager {
    private static _instance: BleManager;

    private constructor() {}

    static get Instance() {
        return this._instance || (this._instance = new this());
    }

    scan() {
        // Todo
    }

    connect() {
        // Todo
    }

    private write(action: Action) {
        // Todo
    }

    /*
        index 4-7 = position (0, 1, 2, 3)
        value = step priority (-1: no stop)
    */
    executePath() {
        // Todo
        this.write("PATH");
    }

    distributeFood() {
        // Todo
        this.write("FOOD");
    }

    whistle() {
        // Todo
        this.write("WHSL");
    }
}