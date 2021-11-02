import Station, { Reading } from "./interfaces/Station";
import TemperatureRange from "./TemperatureRange";

export default class ReaderRange {
    outside(station: Station, range: TemperatureRange): Reading[] {
        return station.readings.filter(s => !range.contains(s.temp));
    }
}
