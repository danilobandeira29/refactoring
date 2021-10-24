import Province from "./Province";
import { ProducerType } from "./types/Producer";

export default class Producer {
    province: Province;
    cost: number;
    name: string;
    production: number;

    constructor(aProvince: Province, data: ProducerType) {
        this.province = aProvince;
        this.cost = data.cost;
        this.name = data.name;
        this.production = data.production || 0;
    }

    getName() {
        return this.name;
    }

    getCost() {
        return this.cost;
    }

    setCost(arg: string) {
        this.cost = parseInt(arg);
    }

    getProduction() {
        return this.production;
    }

    setProduction(amountStr: string) {
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this.province.totalProduction += newProduction - this.production;
        this.production = newProduction;
    }
}
