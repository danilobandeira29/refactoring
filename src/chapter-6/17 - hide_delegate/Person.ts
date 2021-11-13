import Department from "./Department";

export default class Person {
    private readonly department: Department;
    private name: string;

    constructor(name: string, manager: string) {
        this.name = name;
        this.department = new Department(manager);
    }

    getManager(): string {
        return this.department.getManager();
    }
}
