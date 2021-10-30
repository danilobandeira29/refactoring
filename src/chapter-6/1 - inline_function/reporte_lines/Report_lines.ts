interface Costumer {
    name: string;
    location: string
}

export default function reportLines(customer: Costumer) {
    const lines: string[][]= [];
    lines.push(["name", customer.name]);
    lines.push(["location", customer.location]);
    return lines;
}
