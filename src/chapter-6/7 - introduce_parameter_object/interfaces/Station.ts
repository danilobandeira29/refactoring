export default interface Station {
    name: string;
    readings: Reading[]
}

export interface Reading {
    temp: number;
    time: string;
}
