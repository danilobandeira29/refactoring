import inBrazil from "./InBrazil";

describe("InBrazil", function() {
    it("should return true if is a state of Brazil", function() {
        expect(inBrazil("PI")).toEqual(true);
    })

    it("should return false if is not a state of Brazil", function() {
        expect(inBrazil("CA")).toEqual(false);
    })
})
