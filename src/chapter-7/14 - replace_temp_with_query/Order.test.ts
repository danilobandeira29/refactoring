import Order from "./Order";
import Order_OLD from "./Order_OLD";

describe("Order suite", function() {
    it("should return 156.8 because is the price of order where base price is lower or equal than 1000", function() {
        const item = {
            price: 4000,
            name: 'chocolate'
        };
        const order = new Order(4, item);
        expect(order.getPrice()).toEqual(156.8);
    })

    it("should return 15200 because is the price of order where base price is higher than 1000", function() {
        const item = {
            price: 4000,
            name: 'chocolate'
        };
        const order = new Order(400, item);
        expect(order.getPrice()).toEqual(15200);
    })
})
