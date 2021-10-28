import { Invoice } from "./interfaces";

export default class Owes {
    printOwing(aInvoice: Invoice) {
        Owes.printBanner();
        const outstanding = Owes.calculateOutstanding(aInvoice);
        const invoice = Owes.recordDueDate(aInvoice);
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

    private static calculateOutstanding(i: Invoice) {
        let outstanding = 0;
        for (const o of i.orders) {
            outstanding += o.amount;
        }
        return outstanding;
    }
}
