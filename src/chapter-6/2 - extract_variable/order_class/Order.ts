import OrderInterface from '../Order'

export default class Order {
    private order: OrderInterface;

    constructor(dto: OrderInterface) {
        this.order = dto;
    }

    getQuantity() {
        return this.order.quantity;
    }

    getItemPrice() {
        return this.order.itemPrice;
    }

    getPrice() {
        return this.basePrice() - this.quantityDiscount() + this.shipping();
    }
    
    private basePrice() {
        return this.order.quantity * this.order.itemPrice;
    }
    
    private quantityDiscount() {
        return Math.max(0, this.order.quantity - 500) * this.order.itemPrice * 0.05;
    }
    
    private shipping() {
        return Math.min(this.basePrice() * 0.1, 100);
    }
}