import ReadingMock from "./mocks/ReadingMock";
import Reading from "./Reading";

describe("Reading", function() {
    let reading: Reading;

    beforeEach(function() {
        reading = new Reading(ReadingMock.create());
    })

    it("should calculate base charge", function() {
        expect(reading.baseCharge()).toEqual(0.24);
    })

    it("should calculate taxable charge", function() {
        expect(reading.taxableCharge()).toEqual(0.19999999999999998);
    })
})