export interface BirdDto {
    name: string;
    plumage?: string;
}

export default class Bird {
    // já existem subclasses de Bird
    // problema é que agora será necessário ter variações de Bird, como WildBird(silvestre) e CaptiveBird(cativeiro).
    private readonly _name: string;
    private readonly _plumage: string;

    constructor({ name, plumage }: BirdDto) {
        this._name = name;
        this._plumage = plumage || "average";
    }

    get plumage(): string {
        return this._plumage;
    }

    get airSpeedVelocity(): null | number {
        return null;
    }
}