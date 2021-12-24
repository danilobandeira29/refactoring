export interface BirdDto {
    name: string;
    plumage?: string;
}

export default class Bird {
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