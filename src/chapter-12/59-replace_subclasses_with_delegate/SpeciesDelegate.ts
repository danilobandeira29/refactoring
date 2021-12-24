import Bird, {BirdDto} from "./Bird";
import {AfricanSwallowDelegateDto} from "./AfricanSwallowDelegate";
import {NorwegianBlueParrotDelegateDto} from "./NorwegianBlueParrotDelegate";

interface SpeciesDelegateDto {
    props?: AfricanSwallowDelegateDto | BirdDto | NorwegianBlueParrotDelegateDto;
    bird: Bird;
}

export default class SpeciesDelegate {
    private _bird: Bird;
    private props?: AfricanSwallowDelegateDto | BirdDto | NorwegianBlueParrotDelegateDto;

    constructor(dto: SpeciesDelegateDto) {
        this.props = dto.props;
        this._bird = dto.bird;
    }

    get plumage(): string {
        return this._bird.plumage;
    }

    get airSpeedVelocity(): number | null {
        return null;
    }
}