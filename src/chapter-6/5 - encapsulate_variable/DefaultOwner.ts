let defaultOwnerData = { first_name: "Danilo", last_name: "Bandeira" };

export function defaultOwner() {
    return Object.assign({}, defaultOwnerData);
}

export function setDefaultOwner(owner: { first_name: string; last_name: string; }) {
    defaultOwnerData = owner;
}
