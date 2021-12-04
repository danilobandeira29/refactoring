import Address, { AddressDto } from "./Address";
import UnknownAddress from "./UnknownAddress";

export default class Person {
    private readonly name: string;
    readonly address: Address | UnknownAddress;

    constructor(dto: { name: string, address?: AddressDto }) {
        this.name = dto.name;
        this.address = dto.address ? new Address(dto.address) : new UnknownAddress();
    }
}
