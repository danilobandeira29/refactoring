import Performance from "./interfaces/Performance";
import {PlayType} from "./interfaces/PlayType";

export default class PerformanceCalculator {
    performance: Performance;
    play: { name: string; type: PlayType };

    constructor(performance: Performance, play: { name: string, type: PlayType }) {
        this.performance = performance;
        this.play = play;
    }

    get amount(): number {
        throw new Error("Subclass responsibility.");
    }

    get volumeCreditsFor() {
        let volumeCredits = 0;
        volumeCredits += Math.max(this.performance.audience - 30, 0);
        if (PlayType.COMEDY === this.play.type) volumeCredits += Math.floor(this.performance.audience / 5);
        return volumeCredits;
    }
}
