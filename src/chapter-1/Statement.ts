import Invoice from "./interfaces/Invoice";
import Play from "./interfaces/Plays";
import Statement from "./interfaces/Statement";
import createStatement from "./createStatement";

export default function htmlStatement (invoice: Invoice, plays: Play) {
    return renderHtml(createStatement(invoice, plays));
}

function renderHtml(statement: Statement) {
    let result = `<h1>Statement for ${statement.customer}</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>\n";
    for (let perf of statement.performances) {
        result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>\n`;
        result += ` <td>${usd(perf.amount)}</td>\n`;
    }
    result += "</table>\n";
    result += `<p>Amount owed is <em>${usd(statement.totalAmount)}</em></p>\n`;
    result += `<p>You earned <em>${statement.totalVolumeCredits}</em> credits</p>\n`;
    return result;
}

function usd(value: number): string {
    return new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(value/100)
}
