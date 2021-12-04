import Person_OLD from "./Person_OLD";

describe("Person suite", function() {
    it("should return Street and Number as unknown Address default value", function() {
        const person = new Person_OLD({ name: "Danilo Bandeira" });
        expect(person.getAddress() ?? "Street: unknown; Number: unknown").toEqual("Street: unknown; Number: unknown");
    })

    it("should return Street and Number as Address value", function() {
        const person = new Person_OLD({ name: "Danilo Bandeira", address: { street: "street_name", number: "04" } });
        expect(person.getAddress() ?? "Street: unknown; Number: unknown").toEqual("Street: street_name; Number: 04");
    })
})
