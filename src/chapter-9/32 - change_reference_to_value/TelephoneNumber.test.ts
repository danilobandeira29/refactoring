import TelephoneNumber from "./TelephoneNumber";

describe("TelephoneNumber suite", function() {
    it("should telephone number equals", function() {
        expect(new TelephoneNumber({ areaCode: "86", number: "995451018" }))
            .toEqual(new TelephoneNumber({ areaCode: "86", number: "995451018" }))
    })

    it("should method equals return true because verify if each value is equal to other", function() {
        const telephone_number = new TelephoneNumber({ areaCode: "86", number: "995451018" })
        const other = new TelephoneNumber({ areaCode: "86", number: "995451018" });
        expect(telephone_number.equals(other)).toBe(true);
    })
})