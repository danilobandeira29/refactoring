import Station from "../interfaces/Station";

export default class StationMock {
    static create() {
        return {
            name: "ZB1",
            readings: [
                { temp: 47, time: "2021-10-29 07:00" },
                { temp: 53, time: "2021-10-29 07:10" },
                { temp: 58, time: "2021-10-29 07:20" },
                { temp: 53, time: "2021-10-29 07:30" },
                { temp: 51, time: "2021-10-29 07:40" },
            ]
        } as Station;
    }
}
