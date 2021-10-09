import Invoice from "./interfaces/Invoice";
import Play from "./interfaces/Plays";
import { PlayType } from "./interfaces/PlayType";
import Performance from "./interfaces/Performance";

export default function statement (invoice: Invoice, plays: Play) {
    let totalAmount = 0
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD",
            minimumFractionDigits: 2 }).format;

    for (let perf of invoice.performances) {
        const play = playsFor(perf);
        let thisAmount = amountFor(perf, play);
        // add volume credits
        volumeCredits += Math.max(perf.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if (PlayType.COMEDY === play.type) volumeCredits += Math.floor(perf.audience / 5);
        // print line for this order
        result += ` ${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`;
        totalAmount += thisAmount;
    }
    result += `Amount owed is ${format(totalAmount/100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;

    function playsFor(p: Performance) {
        return plays[p.playID];
    }
}

function amountFor(performance: Performance, play: { name: string, type: PlayType }): number {
    let amount = 0;
    switch (play.type) {
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
            throw new Error(`unknown type: ${play.type}`);
    }
    return amount;
}
