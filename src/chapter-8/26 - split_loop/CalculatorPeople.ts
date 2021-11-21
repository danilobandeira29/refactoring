import PeopleDto from "./PeopleDto";

export default function calculatorPeople(people: PeopleDto[]): string {
    const total_salary = totalSalary(people);
    const youngest_age = youngestAge(people);
    return `youngest_age: ${youngest_age}, total_salary: ${total_salary}`;
}

function totalSalary(people: PeopleDto[]): number {
    let total_salary = 0;
    for(const p of people) {
        total_salary += p.salary;
    }
    return total_salary;
}

function youngestAge(people: PeopleDto[]): number {
    let youngest_age = people[0].age || Infinity;
    for(const p of people) {
        if (p.age < youngest_age) youngest_age = p.age;
    }
    return youngest_age;
}