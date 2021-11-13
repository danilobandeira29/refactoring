export default class Department {
    private readonly manager: string;

    constructor(manager: string) {
        this.manager = manager;
    }

    getManager(): string {
        return this.manager;
    }
}
