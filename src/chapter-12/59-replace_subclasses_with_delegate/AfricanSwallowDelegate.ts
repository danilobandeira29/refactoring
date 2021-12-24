export interface AfricanSwallowDelegateDto {
    numberOfCoconuts: number;
}

export default class AfricanSwallowDelegate {
    private readonly _numberOfCoconuts: number;

    constructor(dto: { numberOfCoconuts: number }) {
        this._numberOfCoconuts = dto.numberOfCoconuts;
    }

    get airSpeedVelocity(): number | null {
        return Math.abs(40 - (2 * this._numberOfCoconuts));
    }
}