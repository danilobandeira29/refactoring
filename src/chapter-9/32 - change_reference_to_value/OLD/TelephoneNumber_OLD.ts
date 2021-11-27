export default class TelephoneNumber_OLD {
    private areaCode: string;
    private number: string;

    constructor() {
        this.areaCode = "";
        this.number = "";
    }

    getAreaCode(): string {
        return this.areaCode;
    }

    setAreaCode(officeAreaCode: string): void {
        this.areaCode = officeAreaCode;
    }

    getNumber(): string {
        return this.number;
    }

    setNumber(number: string): void {
        this.number = number;
    }

    toString(): string {
        return `(${this.areaCode}) ${this.number}`;
    }
}
