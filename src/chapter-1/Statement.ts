import Invoice from "./interfaces/Invoice";
import Play from "./interfaces/Plays";
import { PlayType } from "./interfaces/PlayType";
import Performance from "./interfaces/Performance";

export default function statement (invoice: Invoice, plays: Play) {
    let totalAmount = 0
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;

    for (let perf of invoice.performances) {
        // add volume credits
        volumeCredits += volumeCreditsFor(perf)
        // print line for this order
        result += ` ${playsFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
        totalAmount += amountFor(perf);
    }
    result += `Amount owed is ${usd(totalAmount)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;

    function usd(value: number): string {
        return new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(value/100)
    }

    function playsFor(p: Performance) {
        return plays[p.playID];
    }

    function volumeCreditsFor(performance: Performance) {
        let volumeCredits = 0;
        volumeCredits += Math.max(performance.audience - 30, 0);
        if (PlayType.COMEDY === playsFor(performance).type) volumeCredits += Math.floor(performance.audience / 5);
        return volumeCredits;
    }

    function amountFor(performance: Performance): number {
        let amount = 0;
        switch (playsFor(performance).type) {
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
                throw new Error(`unknown type: ${playsFor(performance).type}`);
        }
        return amount;
    }

}

