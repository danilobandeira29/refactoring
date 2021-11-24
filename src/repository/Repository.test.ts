import Repository, { Person } from "./Repository";

describe("Repository suite", function() {
    let repository: Repository;

    beforeEach(function() {
        repository = new Repository();
    })

    describe("happy path", function() {
        let person: Person;

        beforeEach(function() {
            person = {
                name: "Danilo Bandeira",
                id: "1"
            };
        })

        it("should get person by correct name and id", function() {
            expect(repository.get.by({ name: "Danilo Bandeira", id: "1" })).toEqual(person);
        })

        it("should get person only by name", function() {
            expect(repository.get.by({ name: "Danilo Bandeira" })).toEqual(person);
        })
    })

    describe("throw", function() {
        it("if name exists but id no", function() {
            expect(() => repository.get.by({ name: "Danilo Bandeira", id: "not_exists" })).toThrow(Error);
        })
    })
})
