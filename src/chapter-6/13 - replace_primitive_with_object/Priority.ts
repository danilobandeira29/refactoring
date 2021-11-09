export default class Priority {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    toString() {
        return this.value;
    }

    static getIndex(value: string): number {
        return Priority.legalValues().findIndex(p => p === value);
    }

    static legalValues() {
        return ["low", "normal", "high", "rush"];
    }

    highThan(value: string) {
        return Priority.getIndex(this.toString()) > Priority.getIndex(value);
    }

    equals(value: string) {
       return Priority.getIndex(this.toString()) === Priority.getIndex(value);
    }

    lowerThan(value: string) {
        return Priority.getIndex(this.toString()) < Priority.getIndex(value);
    }
}
