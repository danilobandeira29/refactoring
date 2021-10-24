import Province from "./Province";
import ProvinceMock from "./ProvinceMock";
import * as assert from "assert";

describe('Province suite', function() {
    it('shortfall', function() {
        const asia = new Province(ProvinceMock.create());
        assert.equal(asia.getShortfall(), 5);
    })
})
