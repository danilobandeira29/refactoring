import Order from "../Order";

export default function price(order: Order) {
    // preço é igual ao preço base - desconto por quantidade + frete
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
}
