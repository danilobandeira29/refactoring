import Station, { Reading } from "./Station";
import TemperatureRange from "../TemperatureRange";

export namespace ReaderRangeNamespace {
    export type Outside = (station: Station, range: TemperatureRange) => Reading[];
}
