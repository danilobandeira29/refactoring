import rating from "./Rating";

describe("Rating", function() {
    it("should return 2 to rating more than five deliveries", function() {
        expect(rating({ numberOfLateDeliveries: 6 })).toEqual(2);
    })

    it("should return 1 to rating equal to five deliveries", function() {
        expect(rating({ numberOfLateDeliveries: 5 })).toEqual(1);
    })
})
