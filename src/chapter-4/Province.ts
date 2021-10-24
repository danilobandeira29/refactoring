import Producer from "./Producer";

type ProvinceType = {
    name: string;
    demand: number;
    price: number;
    producers: {
        name: string;
        cost: number;
        production: number;
    }[];
}

export default class Province {
    name: string;
    producers: Producer[];
    totalProduction: number;
    demand: number;
    price: number;

    constructor(doc: ProvinceType) {
        this.name = doc.name;
        this.producers = [];
        this.totalProduction = 0;
        this.demand = doc.demand;
        this.price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    addProducer(arg: Producer) {
        this.producers.push(arg);
        this.totalProduction += arg.production;
    }

    getName() {
        return this.name;
    }

    getProducers() {
        return this.producers.slice();
    }

    getTotalProduction() {
        return this.totalProduction;
    }

    setTotalProduction(arg: number) {
        this.totalProduction = arg;
    }

    getDemand() {
        return this.demand;
    }

    setDemand(arg: string) {
        this.demand = parseInt(arg);
    }

    getPrice()    {
        return this.price;
    }

    setPrice(arg: string) {
        this.price = parseInt(arg);
    }

    getShortfall() {
        console.log(this.demand, this.totalProduction)
        return this.demand - this.totalProduction;
    }

    getProfit() {
        return this.getDemandValue() - this.getDemandCost();
    }

    getDemandCost() {
        let remainingDemand = this.demand;
        let result = 0;
        this.producers
            .sort((a,b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
        return result;
    }

    getDemandValue() {
        return this.getSatisfiedDemand() * this.price;
    }

    getSatisfiedDemand() {
        return Math.min(this.demand, this.totalProduction);
    }

}
