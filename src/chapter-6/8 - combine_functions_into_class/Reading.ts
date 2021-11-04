import ReadingRecord from "./interfaces/ReadingRecord";

export default class Reading {
    private readonly customer: string;
    private readonly quantity: number;
    private readonly month: number;
    private readonly year: number;
    private readonly BASE_CHARGE = 6/100;
    private readonly TAX = 4/100;

    constructor(data: ReadingRecord) {
        this.customer = data.customer;
        this.quantity = data.quantity;
        this.month = data.month;
        this.year = data.year;
    }

    baseCharge() {
        return this.BASE_CHARGE * this.quantity;
    }

    taxableCharge() {
        return Math.max(0, this.baseCharge() - this.TAX);
    }
}
