interface Product {
    id: string;
    quantity: number;
}

export default class Order_OLD {
    private products: Product[];
    private products_quantity: number;

    constructor(dto: Product) {
        this.products = [dto];
        this.products_quantity = dto.quantity;
    }

    add(dto: Product): void {
        this.products.push(dto);
        this.products_quantity += dto.quantity;
    }

    remove(product_id: string) {
        const index_to_remove = this.products.findIndex(p => p.id === product_id);
        this.products_quantity -= this.products[index_to_remove].quantity;
        this.products.splice(index_to_remove);
    }

    get productsQuantity(): number {
        return this.products_quantity;
    }
}
