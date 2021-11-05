import ReadingRecord from "../interfaces/ReadingRecord";

export default class ReadingMock {
    static create() {
        return {
            customer: "Danilo Bandeira",
            month: 10,
            quantity: 4,
            year: 2021
        } as ReadingRecord;
    }
}
