import Owes from "./extract_function";
import invoiceMock from './mocks/mock';

describe("extract function", function() {
    it("should print", function() {
        const owes = new Owes();
        console.log = jest.fn();
        owes.printOwing(invoiceMock);
        expect(console.log).toHaveBeenNthCalledWith(1, "***********************");
        expect(console.log).toHaveBeenNthCalledWith(2, "**** Customer Owes ****");
        expect(console.log).toHaveBeenNthCalledWith(3, "***********************");
        expect(console.log).toHaveBeenNthCalledWith(4, "name: Danilo Bandeira");
        expect(console.log).toHaveBeenNthCalledWith(5, "amount: R$ 9,00");
        expect(console.log).toHaveBeenNthCalledWith(6, "due: 28/11/1993");
    })
})
