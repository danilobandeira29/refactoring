export interface AddressDto {
    street: string;
    number: string
}

export default class Address {
    private readonly street: string;
    private readonly number: string;

    constructor(dto: AddressDto) {
        this.street = dto.street;
        this.number = dto.number;
    }

    get get(): string {
        return `Street: ${this.street}; Number: ${this.number}`;
    }

}

