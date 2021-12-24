import EuropeanSwallowDelegate from "./EuropeanSwallowDelegate";
import AfricanSwallowDelegate, {AfricanSwallowDelegateDto} from "./AfricanSwallowDelegate";

export interface BirdDto {
    name: string;
    plumage?: string;
    type?: string;
    numberOfCoconuts?: number;
}

export default class Bird {
    private readonly _name: string;
    private readonly _plumage: string;
    readonly speciesDelegate: EuropeanSwallowDelegate | AfricanSwallowDelegate | null;

    constructor(dto: BirdDto) {
        this._name = dto.name;
        this._plumage = dto.plumage || "average";
        this.speciesDelegate = Bird.selectSpeciesDelegate(dto);
    }

    get plumage(): string {
        return this._plumage;
    }

    get airSpeedVelocity(): null | number {
        return this.speciesDelegate ? this.speciesDelegate.airSpeedVelocity : null;
    }

    private static selectSpeciesDelegate(dto: BirdDto): EuropeanSwallowDelegate | null {
        switch(dto.type) {
            case "EuropeanSwallow":
                return new EuropeanSwallowDelegate();
            case "AfricanSwallow":
                return new AfricanSwallowDelegate(dto as AfricanSwallowDelegateDto);
            default: return null;
        }
    }
}