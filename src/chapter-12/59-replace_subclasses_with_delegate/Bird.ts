import EuropeanSwallowDelegate from "./EuropeanSwallowDelegate";
import AfricanSwallowDelegate, {AfricanSwallowDelegateDto} from "./AfricanSwallowDelegate";
import NorwegianBlueParrotDelegate, {NorwegianBlueParrotDelegateDto} from "./NorwegianBlueParrotDelegate";
import SpeciesDelegateImpl from "./SpeciesDelegate";

export interface BirdDto {
    name: string;
    plumage?: string;
    type?: string;
    numberOfCoconuts?: number;
    voltage?: number;
    isNailed?: boolean;
}

type SpeciesDelegate = EuropeanSwallowDelegate | AfricanSwallowDelegate | NorwegianBlueParrotDelegate | SpeciesDelegateImpl ;

export default class Bird {
    readonly name: string;
    readonly _plumage: string;
    readonly speciesDelegate: SpeciesDelegate;

    constructor(dto: BirdDto) {
        this.name = dto.name;
        this._plumage = dto.plumage || "average";
        this.speciesDelegate = this.selectSpeciesDelegate(dto);
    }

    get plumage(): string {
        return this.speciesDelegate.plumage;
    }

    get airSpeedVelocity(): number | null {
        return this.speciesDelegate.airSpeedVelocity;
    }

    private selectSpeciesDelegate(dto: BirdDto): SpeciesDelegate {
        switch(dto.type) {
            case "EuropeanSwallow":
                return new EuropeanSwallowDelegate(this);
            case "AfricanSwallow":
                return new AfricanSwallowDelegate(dto as AfricanSwallowDelegateDto, this);
            case "NorwegianBlueParrot":
                return new NorwegianBlueParrotDelegate(dto as NorwegianBlueParrotDelegateDto, this);
            default:
                return new SpeciesDelegateImpl({ props: dto, bird: this });
        }
    }
}