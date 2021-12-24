import Bird, {BirdDto} from "./Bird";

export interface NorwegianBlueParrotDto extends BirdDto {
    voltage: number;
    isNailed: boolean;
}

export default class NorwegianBlueParrot extends Bird {
    private readonly _voltage: number;
    private readonly _isNailed: boolean;

    constructor(dto: NorwegianBlueParrotDto) {
        super(dto);
        this._voltage = dto.voltage;
        this._isNailed = dto.isNailed;
    }

    get airSpeedVelocity(): number | null {
        return this._isNailed ? 0 : 10 + this._voltage / 10;
    }

    get plumage(): string {
        return this._voltage > 100 ? "scorched" : "beautiful";
    }
}
