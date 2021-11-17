import AccountType from "./AccountType";

export default class Account {
    private number: string;
    private type: AccountType;

    constructor({ number, type }: { number: string; type: AccountType }) {
        this.number = number;
        this.type = type;
    }

    getInterestRate(): number {
        return this.type.interest_rate;
    }
}
