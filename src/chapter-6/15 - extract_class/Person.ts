import TelephoneNumber from "./TelephoneNumber";

interface TelephoneNumberDto {
    officeAreaCode: string;
    officeNumber: string;
}

class Person {
    private name: string;
    private telephoneNumber: TelephoneNumber;

    constructor(name: string, telefoneNumber: TelephoneNumberDto) {
        this.name = name;
        this.telephoneNumber = new TelephoneNumber({ areaCode: telefoneNumber.officeAreaCode, number: telefoneNumber.officeNumber })
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getTelephoneNumber(): string{
        return this.telephoneNumber.toString();
    }

    getOfficeNumber(): string{
        return this.telephoneNumber.getNumber();
    }

    getOfficeAreaCode(): string{
        return this.telephoneNumber.getAreaCode();
    }

    setOfficeAreaCode(areaCode: string): void {
        this.telephoneNumber.setAreaCode(areaCode);
    }

    setOfficeNumber(officeNumber: string): void {
        this.telephoneNumber.setNumber(officeNumber);
    }
}
