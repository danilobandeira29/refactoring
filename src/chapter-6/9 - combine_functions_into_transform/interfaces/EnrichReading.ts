import ReadingRecord from "./ReadingRecord";

export default interface EnrichReading extends ReadingRecord {
    base_charge: number;
    taxable_charge: number;
}
