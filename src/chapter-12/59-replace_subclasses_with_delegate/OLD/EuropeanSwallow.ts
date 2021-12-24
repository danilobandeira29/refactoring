import Bird, {BirdDto} from "./Bird";

export default class EuropeanSwallow extends Bird {
    constructor(dto: BirdDto) {
        super(dto);
    }

    get airSpeedVelocity(): number {
        return 35;
    }
}