import Invoice from "./interfaces/Invoice";
import Play from "./interfaces/Plays";
import Statement from "./interfaces/Statement";
import createStatement from "./createStatement";

export default function statement (invoice: Invoice, plays: Play) {
    return renderPlainText(createStatement(invoice, plays));
}

function renderPlainText(statement: Statement) {
    let result = `Statement for ${statement.customer}\n`;

    for (let perf of statement.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${usd(statement.totalAmount)}\n`;
    result += `You earned ${statement.totalVolumeCredits} credits\n`;
    return result;

    function usd(value: number): string {
        return new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(value/100)
    }

}
