import ReadingRecord from "./interfaces/ReadingRecord";
import EnrichReading from "./interfaces/EnrichReading";

export function enrichReading(r: ReadingRecord) {
    const reading: EnrichReading = <EnrichReading>{ ...r };
    reading.base_charge = baseCharge(reading);
    reading.taxable_charge = taxableCharge(reading);
    return reading;
}

function baseCharge(reading: ReadingRecord) {
    return 6/100 * reading.quantity;
}

function taxableCharge(reading: ReadingRecord) {
    return Math.max(0, baseCharge(reading) - 4/100);
}
