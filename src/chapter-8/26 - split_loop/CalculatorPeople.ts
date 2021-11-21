import PeopleDto from "./PeopleDto";

export default function calculatorPeople(people: PeopleDto[]): string {
    let total_salary = 0;
    for(const p of people) {
        total_salary += p.salary;
    }
    let youngest_age = people[0].age || Infinity;
    for(const p of people) {
        if (p.age < youngest_age) youngest_age = p.age;
    }
    return `youngest_age: ${youngest_age}, total_salary: ${total_salary}`;
}