import Province from "./Province";
import ProvinceMock from "./ProvinceMock";
import * as assert from "assert";

describe("Province suite", function() {
    let asia: Province;

    beforeEach(function() {
        asia = new Province(ProvinceMock.create());
    })

    it("shortfall", function() {
        assert.equal(asia.getShortfall(), 5);
    })

    it("profit", function() {
        assert.equal(asia.getProfit(), 230);
    })

    it("change production", function() {
        asia.producers[0].production = 20;
        expect(asia.getShortfall()).toEqual(-6);
        expect(asia.getProfit()).toEqual(292);
    })
})
