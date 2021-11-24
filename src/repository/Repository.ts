export interface Person {
    name: string;
    id: string;
}

interface Get {
    by: (person: Partial<Person>) => Person | void;
    byName: (name: string, error?: () => void) => Person | void;
    byId: (id: string, error?: () => void) => Person | void;
}

export default class Repository {
    public readonly get: Get;
    private static PERSONS: Person[] = [
        {
            name: "Danilo Bandeira",
            id: "1"
        },
        {
            name: "Ana Carolina",
            id: "2"
        }
    ];

    constructor() {
        this.get = { byName: this.byName, byId: this.byId, by: this.by };
    }

    private byName(name: string, error: () => void = Repository.notFound): Person | void {
        return Repository.PERSONS.find(p => p.name === name) ?? error();
    }

    private static notFound(): void {
        throw new Error("Person not found.");
    }

    private byId(id: string, error: () => void = Repository.notFound): Person | void {
        return Repository.PERSONS.find(p => p.id === id) ?? error();
    }

    private by(person: Partial<Person>, error: () => void = Repository.notFound): Person | void {
        const person_keys = Object.keys(person).filter(key => person[key as keyof Person]) as (keyof Person)[];
        return Repository.PERSONS.find(p => person_keys.every(k => p[k] === person[k])) ?? error();
    }
}