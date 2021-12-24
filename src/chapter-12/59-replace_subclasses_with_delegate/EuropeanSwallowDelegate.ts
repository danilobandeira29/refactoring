import Bird from "./Bird";
import SpeciesDelegate from "./SpeciesDelegate";

export default class EuropeanSwallowDelegate extends SpeciesDelegate {
    constructor(bird: Bird) {
        super({ bird });
    }

    get airSpeedVelocity(): number | null {
        return 35;
    }
}
