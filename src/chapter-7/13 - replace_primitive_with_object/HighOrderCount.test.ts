import Order from "./Order";

describe("High Order Count Suite", function() {
    it("should return 2 its the count of orders high than normal", function() {
        const highThanNormalOrdersCount: number = [
            new Order("high"),
            new Order("rush"),
            new Order("normal"),
            new Order("low"),
        ].filter(o => o.getPriority().highThan("normal")).length;
        expect(highThanNormalOrdersCount).toEqual(2);
    })

    it("should return 3 its the count of orders that priority is equal to normal", function() {
        const ordersEqualsNormalCount: number = [
            new Order("high"),
            new Order("rush"),
            new Order("normal"),
            new Order("normal"),
            new Order("normal"),
            new Order("low"),
        ].filter(o => o.getPriority().equals("normal")).length;
        expect(ordersEqualsNormalCount).toEqual(3);
    })

    it("should return 1 its the count of orders that priority is lower than normal", function() {
        const lowerThanNormalOrdersCount: number = [
            new Order("high"),
            new Order("rush"),
            new Order("normal"),
            new Order("normal"),
            new Order("normal"),
            new Order("low"),
        ].filter(o => o.getPriority().lowerThan("normal")).length;
        expect(lowerThanNormalOrdersCount).toEqual(1);
    })
})
