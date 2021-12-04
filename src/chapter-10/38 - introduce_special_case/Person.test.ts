import Person from "./Person";

describe("Person suite", function() {
    it("should return Street and Number as unknown Address default value", function() {
        const person = new Person({ name: "Danilo Bandeira" });
        expect(person.address.get).toEqual("Street: unknown; Number: unknown");
    })

    it("should return Street and Number as Address value", function() {
        const person = new Person({ name: "Danilo Bandeira", address: { street: "street_name", number: "04" } });
        expect(person.address.get).toEqual("Street: street_name; Number: 04");
    })
})
