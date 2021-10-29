import reportLines from "./Report_lines";

describe("Report_Lines", function() {
    it("should gather customer information", function() {
        const customer = {
            name: "Danilo Bandeira",
            location: "Teresina"
        };
        expect(reportLines(customer)).toEqual([['name', "Danilo Bandeira"], ["location", "Teresina"]]);
    })
})
