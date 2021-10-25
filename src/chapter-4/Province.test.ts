import Province from "./Province";
import ProvinceMock from "./ProvinceMock";
import * as assert from "assert";

describe('Province suite', function() {
    let asia: Province;

    beforeEach(function () {
        asia = new Province(ProvinceMock.create());
    })

    it('shortfall', function() {
        assert.equal(asia.getShortfall(), 5);
    })

    it('profit', function () {
        assert.equal(asia.getProfit(), 230);
    })
})
