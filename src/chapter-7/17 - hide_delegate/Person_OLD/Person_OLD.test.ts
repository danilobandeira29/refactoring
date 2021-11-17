import Person_OLD from "./Person_OLD";

describe("Person_OLD suite", function() {
    it("should get department manager", function() {
        expect(new Person_OLD("Ana", "Danilo Bandeira").getDepartment().getManager()).toEqual("Danilo Bandeira");
    })
})
