import Invoice from "./interfaces/Invoice";
import Play from "./interfaces/Plays";
import { PlayType } from "./interfaces/PlayType";
import Performance from "./interfaces/Performance";

export default function statement (invoice: Invoice, plays: Play) {
    const statement: Invoice = {} as Invoice;
    statement.customer = invoice.customer;
    statement.performances = invoice.performances.map(enrichPerformance);
    return renderPlainText(statement);

    function enrichPerformance(aPerformance: Performance) {
        const performance: Performance = { ...aPerformance };
        performance.play = playsFor(performance);
        return performance;
    }

    function playsFor(p: Performance) {
        return plays[p.playID];
    }

}

function renderPlainText(statement: Invoice) {
    let result = `Statement for ${statement.customer}\n`;

    for (let perf of statement.performances) {
        result += ` ${perf.play.name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${usd(totalAmount())}\n`;
    result += `You earned ${volumeCredit()} credits\n`;
    return result;

    function totalAmount() {
        let totalAmount = 0;
        for (let perf of statement.performances) {
            totalAmount += amountFor(perf);
        }
        return totalAmount;
    }

    function volumeCredit() {
        let volumeCredits = 0;
        for (let perf of statement.performances) {
            volumeCredits += volumeCreditsFor(perf)
        }
        return volumeCredits;
    }

    function usd(value: number): string {
        return new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(value/100)
    }

    function volumeCreditsFor(performance: Performance) {
        let volumeCredits = 0;
        volumeCredits += Math.max(performance.audience - 30, 0);
        if (PlayType.COMEDY === performance.play.type) volumeCredits += Math.floor(performance.audience / 5);
        return volumeCredits;
    }

    function amountFor(performance: Performance): number {
        let amount = 0;
        switch (performance.play.type) {
            case PlayType.TRAGEDY:
                amount = 40000;
                if (performance.audience > 30) {
                    amount += 1000 * (performance.audience - 30);
                }
                break;
            case "comedy":
                amount = 30000;
                if (performance.audience > 20) {
                    amount += 10000 + 500 * (performance.audience - 20);
                }
                amount += 300 * performance.audience;
                break;
            default:
                throw new Error(`unknown type: ${performance.play.type}`);
        }
        return amount;
    }
}
