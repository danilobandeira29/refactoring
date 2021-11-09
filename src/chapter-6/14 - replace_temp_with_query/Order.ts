export default class Order {
    private readonly quantity: number;
    private readonly item: { price: number; name: string };
    static readonly DISCOUNT_INCREASE_RATE = 1000;

    constructor(quantity: number, item: { price: number, name: string }) {
        this.quantity = quantity;
        this.item = item;
    }

    getPrice() {
        return this.basePrice() * this.discountFactor();
    }

    basePrice() {
        return this.quantity * this.item.price / 100;
    }

    discountFactor() {
        if (this.basePrice() > Order.DISCOUNT_INCREASE_RATE) return 0.95;
        return 0.98;
    }
}
