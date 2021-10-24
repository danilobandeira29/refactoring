import Producer, {ProducerType} from "./Producer";

interface ProvinceType {
    name: string;
    demand: number;
    price: number;
    producers: ProducerType[]
}

export default class Province {
    private _name: string;
    private _producers: ProducerType[];
    public totalProduction: number;
    private _demand: number;
    private _price: number;

    constructor(doc: ProvinceType) {
        this._name = doc.name;
        this._producers = [];
        this.totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    addProducer(arg: any) {
        this._producers.push(arg);
        this.totalProduction += arg.production;
    }

    getName() {
        return this._name;
    }

    getProducers() {
        return this._producers.slice();
    }

    getTotalProduction() {
        return this.totalProduction;
    }

    setTotalProduction(arg: number) {
        this.totalProduction = arg;
    }

    getDemand() {
        return this._demand;
    }

    setDemand(arg: string) {
        this._demand = parseInt(arg);
    }

    getPrice()    {
        return this._price;
    }

    setPrice(arg: string) {
        this._price = parseInt(arg);
    }

    getShortfall() {
        return this._demand - this.totalProduction;
    }

    getProfit() {
        return this.getDemandValue() - this.getDemandCost();
    }

    getDemandCost() {
        let remainingDemand = this._demand;
        let result = 0;
        this._producers
            .sort((a,b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
        return result;
    }

    getDemandValue() {
        return this.getSatisfiedDemand() * this._price;
    }

    getSatisfiedDemand() {
        return Math.min(this._demand, this.totalProduction);
    }

}
