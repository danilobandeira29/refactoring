class Person_OLD {
    private name: string;
    private officeAreaCode: string;
    private officeNumber: string;

    constructor(name: string, officeAreaCode: string, officeNumber: string) {
        this.name = name;
        this.officeAreaCode = officeAreaCode;
        this.officeNumber = officeNumber;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getTelephoneNumber(): string {
        return `(${this.officeAreaCode}) ${this.officeNumber}`;
    }

    getOfficeAreaCode(): string {
        return this.officeAreaCode;
    }

    setOfficeAreaCode(officeAreaCode: string): void {
        this.officeAreaCode = officeAreaCode;
    }

    getOfficeNumber(): string {
        return this.officeNumber;
    }

    setOfficeNumber(officeNumber: string): void {
        this.officeNumber = officeNumber;
    }
}
