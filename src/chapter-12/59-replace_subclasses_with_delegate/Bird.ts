import EuropeanSwallowDelegate from "./EuropeanSwallowDelegate";

export interface BirdDto {
    name: string;
    plumage?: string;
    type?: string;
}

export default class Bird {
    private readonly _name: string;
    private readonly _plumage: string;
    readonly speciesDelegate: EuropeanSwallowDelegate | null;

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
            default: return null;
        }
    }
}