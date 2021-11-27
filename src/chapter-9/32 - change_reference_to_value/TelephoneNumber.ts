export default class TelephoneNumber {
    private areaCode: string;
    private number: string;

    constructor({ areaCode, number }: { areaCode: string, number: string }) {
        this.areaCode = areaCode;
        this.number = number;
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

    equals(other: TelephoneNumber) {
        return Object.keys(this).every((key) => this[key as keyof TelephoneNumber] === other[key as keyof TelephoneNumber]);
    }
}
