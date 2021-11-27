interface Product {
    id: string;
    quantity: number;
}

export default class Order {
    private products: Product[];

    constructor(dto: Product) {
        this.products = [dto];
    }

    add(dto: Product): void {
        this.products.push(dto);
    }

    remove(product_id: string) {
        const index_to_remove = this.products.findIndex(p => p.id === product_id);
        this.products.splice(index_to_remove);
    }

    get productsQuantity(): number {
        return this.products.reduce((acc, p) => acc + p.quantity, 0);
    }
}
