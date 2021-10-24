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
    public _totalProduction: number;
    private _demand: number;
    private _price: number;

    constructor(doc: ProvinceType) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }
    addProducer(arg: any) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    getName() {
        return this._name;
    }

    getProducers() {
        return this._producers.slice();
    }

    getTotalProduction() {
        return this._totalProduction;
    }

    setTotalProduction(arg: number) {
        this._totalProduction = arg;
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

}
