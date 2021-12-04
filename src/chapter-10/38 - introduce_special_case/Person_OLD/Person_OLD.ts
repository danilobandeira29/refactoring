import Address, { AddressDto } from "./Address_OLD";

export default class Person {
    private readonly name: string;
    private readonly address?: Address;

    constructor(dto: { name: string, address?: AddressDto }) {
        this.name = dto.name;
        if(dto.address) this.address = new Address(dto.address);
    }

    getAddress() {
        if(this.address) return this.address.get;
    }
}
