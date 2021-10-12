import Performance from "./interfaces/Performance";
import {PlayType} from "./interfaces/PlayType";

export default class PerformanceCalculator {
    performance: Performance;
    play: { name: string; type: PlayType };

    constructor(performance: Performance, play: { name: string, type: PlayType }) {
        this.performance = performance;
        this.play = play;
    }

    amount(): number {
        throw new Error("Subclass responsibility.");
    }

    volumeCreditsFor() {
        return Math.max(this.performance.audience - 30, 0);
    }
}
