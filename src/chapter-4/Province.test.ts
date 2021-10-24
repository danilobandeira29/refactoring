import Province from "./Province";
import sampleProvinceData from "./sampleProvinceData";

describe('Province suite', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        expect(asia.getShortfall()).toBe(5);
    })
})
