import Person from "./Person";

describe("Person suite", function() {
    it("should get department manager", function() {
        expect(new Person("Ana", "Danilo Bandeira").getDepartment().getManager()).toEqual("Danilo Bandeira");
    })
})
