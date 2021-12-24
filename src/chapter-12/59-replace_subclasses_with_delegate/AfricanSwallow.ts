import Bird, {BirdDto} from "./Bird";

interface AfricanSwallowDto extends BirdDto {
    numberOfCoconuts: number;
}

export default class AfricanSwallow extends Bird {
    private readonly _numberOfCoconuts: number;

    constructor(dto: AfricanSwallowDto) {
        super(dto);
        this._numberOfCoconuts = dto.numberOfCoconuts;
    }

    get airSpeedVelocity(): number | null {
        return Math.abs(40 - (2 * this._numberOfCoconuts));
    }
}