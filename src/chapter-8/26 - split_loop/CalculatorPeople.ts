import PeopleDto from "./PeopleDto";

export default function calculatorPeople(people: PeopleDto[]): string {
    return `youngest_age: ${youngestAge(people)}, total_salary: ${totalSalary(people)}`;
}

function totalSalary(people: PeopleDto[]): number {
    return people.reduce((acc, p) => acc + p.salary, 0);
}

function youngestAge(people: PeopleDto[]): number {
    return Math.min(...people.map(p => p.age));
}