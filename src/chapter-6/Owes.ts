import { Invoice } from "./interfaces";

export default class Owes {
    printOwing(aInvoice: Invoice) {
        let outstanding = 0;

        Owes.printBanner();

        // calcula o valor a pagar (outstanding)
        for (const o of aInvoice.orders) {
            outstanding += o.amount;
        }

        // registra a data de vencimento (due date)
        const invoice = Owes.recordDueDate(aInvoice);

        // exibe detalhes
        Owes.printDetails(invoice, outstanding);
    }

    private static printBanner() {
        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");
    }

    private static printDetails(invoice: Invoice, outstanding: number) {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(outstanding)}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString("pt-BR")}`);
    }

    private static recordDueDate(i: Invoice) {
        const invoice = { ...i };
        const today = new Date("10/29/1993");
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
        return invoice;
    }
}