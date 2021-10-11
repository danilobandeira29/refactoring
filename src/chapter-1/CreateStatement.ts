import Invoice from "./interfaces/Invoice";
import Play from "./interfaces/Plays";
import Statement from "./interfaces/Statement";
import Performance from "./interfaces/Performance";
import { PlayType } from "./interfaces/PlayType";

class PerformanceCalculator {
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

export default function createStatement(invoice: Invoice, plays: Play) {
    const statement: Statement = {} as Statement;
    statement.customer = invoice.customer;
    statement.performances = invoice.performances.map(enrichPerformance);
    statement.totalAmount = totalAmount(statement);
    statement.totalVolumeCredits = totalVolumeCredits(statement);
    return statement;

    function enrichPerformance(aPerformance: Performance) {
        const calculator = new PerformanceCalculator(aPerformance, playsFor(aPerformance));
        const performance: Performance = { ...aPerformance };
        performance.play = calculator.play;
        performance.amount = calculator.amount;
        performance.volumeCredits = calculator.volumeCreditsFor;
        return performance;
    }

    function playsFor(p: Performance) {
        return plays[p.playID];
    }

    function totalAmount(statement: Statement) {
        return statement.performances.reduce((acc, p) => acc + p.amount, 0);
    }

    function totalVolumeCredits(statement: Statement) {
        return statement.performances.reduce((acc, p) => acc + p.volumeCredits, 0);
    }
}