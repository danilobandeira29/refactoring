import { Invoice } from "./interfaces";

export default class Owes {
    printOwing(invoice: Invoice) {
        let outstanding = 0;

        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");

        // calcula o valor a pagar (outstanding)
        for (const o of invoice.orders) {
            outstanding += o.amount;
        }

        // registra a data de vencimento (due date)
        const today = new Date("10/29/1993");
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

        // exibe detalhes
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(outstanding)}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString("pt-BR")}`);
    }
}
