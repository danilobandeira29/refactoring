import Order from "./Order";

describe("High Order Count Suite", function() {
    it("should return 2 its the count of high priority orders", function() {
        const highOrdersCount: number = [
            new Order("high"),
            new Order("rush"),
            new Order("normal"),
            new Order("low"),
        ].filter(o => o.getPriority().highThan("normal")).length;
        expect(highOrdersCount).toEqual(2);
    })
})
