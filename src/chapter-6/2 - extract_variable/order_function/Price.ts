import Order from "../Order";

export default function price(order: Order) {
    const base_price =  order.quantity * order.itemPrice
    const quantity_discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(base_price * 0.1, 100);
    return base_price - quantity_discount + shipping;
}
