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
        let amount = 0;
        switch (this.play.type) {
            case PlayType.TRAGEDY:
                amount = 40000;
                if (this.performance.audience > 30) {
                    amount += 1000 * (this.performance.audience - 30);
                }
                break;
            case PlayType.COMEDY:
                amount = 30000;
                if (this.performance.audience > 20) {
                    amount += 10000 + 500 * (this.performance.audience - 20);
                }
                amount += 300 * this.performance.audience;
                break;
            default:
                throw new Error(`unknown type: ${this.performance.play.type}`);
        }
        return amount;
    }

    get volumeCreditsFor() {
        let volumeCredits = 0;
        volumeCredits += Math.max(this.performance.audience - 30, 0);
        if (PlayType.COMEDY === this.play.type) volumeCredits += Math.floor(this.performance.audience / 5);
        return volumeCredits;
    }
}
