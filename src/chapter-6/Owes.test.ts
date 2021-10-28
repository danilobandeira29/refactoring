import Owes from "./Owes";
import invoiceMock from './mocks/mock';

describe("extract function", function() {
    let owes: Owes;

    beforeEach(function() {
        owes = new Owes();
        console.log = jest.fn();
        owes.printOwing(invoiceMock);
    })

    it("should print banner", function() {
        expect(console.log).toHaveBeenNthCalledWith(1, "***********************");
        expect(console.log).toHaveBeenNthCalledWith(2, "**** Customer Owes ****");
        expect(console.log).toHaveBeenNthCalledWith(3, "***********************");
    })

    it("should print details", function() {
        expect(console.log).toHaveBeenNthCalledWith(4, "name: Danilo Bandeira");
        expect(console.log).toHaveBeenNthCalledWith(5, "amount: R$9.00");
        expect(console.log).toHaveBeenNthCalledWith(6, "due: 11/28/1993");
    })
})
