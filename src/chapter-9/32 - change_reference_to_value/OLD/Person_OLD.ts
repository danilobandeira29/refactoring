import TelephoneNumber_OLD from "./TelephoneNumber_OLD";

export default class Person_OLD {
    private telephoneNumber: TelephoneNumber_OLD;

    constructor() {
        this.telephoneNumber = new TelephoneNumber_OLD();
    }

    get officeAreaCode(): string {
        return this.telephoneNumber.getAreaCode();
    }

    set officeAreaCode(officeAreaCode: string) {
        this.telephoneNumber.setAreaCode(officeAreaCode);
    }

    get officeNumber(): string {
        return this.telephoneNumber.getNumber();
    }

    set officeNumber(officeNumber: string) {
        this.telephoneNumber.setNumber(officeNumber);
    }
}
