import { enrichReading } from "./Reading";
import ReadingMock from "./mocks/ReadingMock";
import EnrichReading from "./interfaces/EnrichReading";

describe("Reading suite", function() {
    let reading: EnrichReading;

    beforeEach(function() {
        reading = enrichReading(ReadingMock.create());
    })

    it("should calculate base charge", function() {
        expect(reading.base_charge).toEqual(0.24);
    })

    it("should calculate taxable charge", function() {
        expect(reading.taxable_charge).toEqual(0.19999999999999998);
    })
})
