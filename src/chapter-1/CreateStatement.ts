import Invoice from "./interfaces/Invoice";
import Play from "./interfaces/Plays";
import Statement from "./interfaces/Statement";
import Performance from "./interfaces/Performance";
import PerformanceCalculator from "./PerformanceCalculator";

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