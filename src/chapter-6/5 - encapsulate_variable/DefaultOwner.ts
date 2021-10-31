let defaultOwnerData = { first_name: "Danilo", last_name: "Bandeira" };

function defaultOwner() {
    return Object.assign({}, defaultOwnerData);
}

function setDefaultOwner(owner: { first_name: string; last_name: string; }) {
    defaultOwnerData = owner;
}
