import Station, {Reading} from "../interfaces/Station";

export default class ReaderRangeOld {
    outside(station: Station, min: number, max: number): Reading[] {
        return station.readings.filter(s => s.temp < min || s.temp > max);
    }
}
