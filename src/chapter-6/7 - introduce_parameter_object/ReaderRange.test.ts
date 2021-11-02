import StationMock from "./mocks/Station";
import ReadingsRange from "./ReaderRange";
import Station from "./interfaces/Station";
import TemperatureRange from "./TemperatureRange";
import { ReaderRangeNamespace } from "./interfaces/ReaderRangeNamespace";

describe("ReaderRange", function() {
    let station: Station;
    let outside: ReaderRangeNamespace.Outside;

    beforeEach(function() {
        station = StationMock.create();
        outside = new ReadingsRange().outside;
    })

    it("should return two readings because is outside temperature range", function() {
        const tempRange = new TemperatureRange(48, 57);
        expect(outside(station, tempRange)).toEqual([{ temp: 47, time: "2021-10-29 07:00" }, { temp: 58, time: "2021-10-29 07:20" }]);
    })

    it("should return empty array because there's no outside temperature range", function() {
        const tempRange = new TemperatureRange(47, 58);
        expect(outside(station, tempRange)).toEqual([]);
    })
})