import Province from "./Province";

export interface ProducerType {
    cost: number;
    name: string;
    production: number;
}

export default class Producer {
    private _province: Province;
    private _cost: number;
    private _name: string;
    private _production: number;

    constructor(aProvince: Province, data: ProducerType) {
        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0;
    }

    getName() {
        return this._name;
    }

    getCost() {
        return this._cost;
    }

    setCost(arg: string) {
        this._cost = parseInt(arg);
    }

    getProduction() {
        return this._production;
    }

    setProduction(amountStr: string) {
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
        this._production = newProduction;
    }
}
