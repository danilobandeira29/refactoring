import { enrichReading } from "./Reading";
import ReadingMock from "./mocks/ReadingMock";
import EnrichReading from "./interfaces/EnrichReading";
import ReadingRecord from "./interfaces/ReadingRecord";

describe("Reading suite", function() {
    let readingOriginal: ReadingRecord;
    let reading: EnrichReading;

    beforeEach(function() {
        readingOriginal = ReadingMock.create();
        reading = enrichReading(readingOriginal);
    })

    it("should calculate base charge", function() {
        expect(reading.base_charge).toEqual(0.24);
    })

    it("should calculate taxable charge", function() {
        expect(reading.taxable_charge).toEqual(0.19999999999999998);
    })

    it("should reading original must be unchanged", function() {
        expect(readingOriginal).not.toEqual(reading);
    })
})
