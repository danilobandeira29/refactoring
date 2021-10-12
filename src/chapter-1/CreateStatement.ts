import Invoice from "./interfaces/Invoice";
import Play from "./interfaces/Plays";
import Statement from "./interfaces/Statement";
import Performance from "./interfaces/Performance";
import { PlayType } from "./interfaces/PlayType";
import ComedyCalculator from "./ComedyCalculator";
import TragedyCalculator from "./TragedyCalculator";

export default function createStatement(invoice: Invoice, plays: Play) {
    const statement: Statement = {} as Statement;
    statement.customer = invoice.customer;
    statement.performances = invoice.performances.map(enrichPerformance);
    statement.totalAmount = totalAmount(statement);
    statement.totalVolumeCredits = totalVolumeCredits(statement);
    return statement;

    function enrichPerformance(aPerformance: Performance) {
        const calculator = createPerformanceCalculator(aPerformance, playsFor(aPerformance));
        const performance: Performance = { ...aPerformance };
        performance.play = calculator.play;
        performance.amount = calculator.amount();
        performance.volumeCredits = calculator.volumeCreditsFor();
        return performance;
    }

    function createPerformanceCalculator(p: Performance, play: { name: string, type: PlayType }) {
        switch (play.type){
            case PlayType.COMEDY: return new ComedyCalculator(p, play);
            case PlayType.TRAGEDY: return new TragedyCalculator(p, play);
            default: throw new Error(`unknown type ${play.type}`);
        }
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