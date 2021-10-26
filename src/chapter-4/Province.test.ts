import Province from "./Province";
import ProvinceMock from "./ProvinceMock";

describe("Province suite", function() {
    let asia: Province;

    beforeEach(function() {
        asia = new Province(ProvinceMock.create());
    })

    it("shortfall", function() {
        expect(asia.getShortfall()).toEqual(5);
    })

    it("profit", function() {
        expect(asia.getProfit()).toEqual(230);
    })

    it("change production", function() {
        asia.producers[0].production = 20;
        expect(asia.getShortfall()).toEqual(-6);
        expect(asia.getProfit()).toEqual(292);
    })
})
