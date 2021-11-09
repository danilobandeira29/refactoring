import Priority from "./Priority";

export default class Order {
    private priority: Priority;

    constructor(priority: string) {
        this.priority = new Priority(priority);
    }

    getPriority(): Priority{
        return this.priority;
    }

    priorityString(): string {
        return this.priority.toString();
    }

    setPriority(value: string): void {
        this.priority = new Priority(value);
    }
}