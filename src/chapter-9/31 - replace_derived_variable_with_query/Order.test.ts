import Order from "./Order";

describe("Order suite", function() {
    it("should return products quantity fifteen when add two products", function() {
        const order = new Order({ id: "4", quantity: 10 });
        const product = { id: "1", quantity: 5 };
        order.add(product);
        expect(order.productsQuantity).toEqual(15);
    })

    it("should return products quantity ten when add two products and remove one", function() {
        const order = new Order({ id: "4", quantity: 10 });
        const product = { id: "1", quantity: 5 };
        order.add(product);
        order.remove(product.id);
        expect(order.productsQuantity).toEqual(10);
    })
})
