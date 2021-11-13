import Department_OLD from "./Department_OLD";

export default class Person_OLD {
    private readonly department: Department_OLD;
    private name: string;

    constructor(name: string, manager: string) {
        this.name = name;
        this.department = new Department_OLD(manager);
    }

    getManager(): string {
        return this.department.getManager();
    }
}
