export default class TemperatureRange {
    private data: { min: number; max: number; };

    constructor(min: number, max: number) {
        this.data = { min, max };
    }

    contains(temp: number) {
        return temp >= this.data.min && temp <= this.data.max;
    }
}
