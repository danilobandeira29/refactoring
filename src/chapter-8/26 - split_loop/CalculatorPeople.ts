import PeopleDto from "./PeopleDto";

export default class People {
    private people: PeopleDto[];

    constructor(dto: PeopleDto[]) {
        this.people = dto;
    }

    calculate(): string {
        return `youngest_age: ${this.youngestAge()}, total_salary: ${this.totalSalary()}`;
    }

    youngestAge(): number {
        return Math.min(...this.people.map(p => p.age));
    }

    totalSalary(): number {
        return this.people.reduce((acc, p) => acc + p.salary, 0);
    }
}