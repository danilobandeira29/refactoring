interface Order {
    amount: number;
}

export interface Invoice {
    orders: Order[];
    customer: string;
    dueDate: Date;
}
