import Bird, {BirdDto} from "./Bird";
import SpeciesDelegate from "./SpeciesDelegate";

export default class EuropeanSwallowDelegate extends SpeciesDelegate {
    constructor(dto: BirdDto, bird: Bird) {
        super({ props: dto, bird });
    }

    get airSpeedVelocity(): number | null {
        return 35;
    }
}
