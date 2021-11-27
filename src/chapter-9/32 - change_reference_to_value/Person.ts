import TelephoneNumber from "./TelephoneNumber";

interface TelephoneNumberDto {
    officeAreaCode: string;
    officeNumber: string;
}

export default class Person {
    private telephoneNumber: TelephoneNumber;

    constructor(dto: TelephoneNumberDto) {
        this.telephoneNumber = new TelephoneNumber({ areaCode: dto.officeAreaCode, number: dto.officeNumber });
    }

    set areaCode(areaCode: string) {
        this.telephoneNumber = new TelephoneNumber({ number: this.telephoneNumber.getNumber(), areaCode });
    }

    set number(number: string) {
        this.telephoneNumber = new TelephoneNumber({ areaCode: this.telephoneNumber.getAreaCode(), number });
    }
}
