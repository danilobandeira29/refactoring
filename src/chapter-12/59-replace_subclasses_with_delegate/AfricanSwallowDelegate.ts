import Bird from "./Bird";
import SpeciesDelegate from "./SpeciesDelegate";

export interface AfricanSwallowDelegateDto {
    numberOfCoconuts: number;
}

export default class AfricanSwallowDelegate extends SpeciesDelegate {
    private readonly _numberOfCoconuts: number;

    constructor(dto: AfricanSwallowDelegateDto, bird: Bird) {
        super({ props: dto, bird });
        this._numberOfCoconuts = dto.numberOfCoconuts;
    }

    get airSpeedVelocity(): number | null {
        return Math.abs(40 - (2 * this._numberOfCoconuts));
    }
}