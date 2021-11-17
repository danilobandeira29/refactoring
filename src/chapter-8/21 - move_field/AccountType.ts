export default class AccountType {
    private name: string;
    interest_rate: number;

    constructor({ name, interest_rate }: { name: string; interest_rate: number }) {
        this.name = name;
        this.interest_rate = interest_rate;
    }
}
