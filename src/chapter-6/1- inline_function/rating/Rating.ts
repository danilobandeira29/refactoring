interface Driver {
    numberOfLateDeliveries: number;
}

export default function rating(d: Driver) {
    return d.numberOfLateDeliveries > 5 ? 2 : 1;
}
