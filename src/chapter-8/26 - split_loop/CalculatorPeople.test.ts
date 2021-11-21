import calculatorPeople from "./CalculatorPeople";

describe("CalculatorPeople suite", function() {
    it("should return 24 for the youngest age and 21000 for total salary", function() {
        const people_dto = [
            {
                name: "Danilo Bandeira",
                age: 28,
                salary: 5000
            },
            {
                name: "Ana Banana",
                age: 24,
                salary: 6000
            },
            {
                name: "Maria de Fátima",
                age: 59,
                salary: 10000
            }
        ];
        const calc = calculatorPeople(people_dto);
        expect(calc).toEqual(`youngest_age: 24, total_salary: 21000`);
    })
})