export default class Order_OLD {
    private readonly quantity: number;
    private readonly item: { price: number; name: string };

    constructor(quantity: number, item: { price: number, name: string }) {
        this.quantity = quantity;
        this.item = item;
    }

    getPrice() {
        let basePrice = this.quantity * this.item.price / 100;
        let discountFactor = 0.98;
        if (basePrice > 1000) discountFactor -= 0.03;
        return basePrice * discountFactor;
    }
}
