import CustomerType from "./CustomerType";

function inBrazil(customer: CustomerType) {
    return ["PI", "SP", "BH", "BA"].includes(customer.address.state);
}
