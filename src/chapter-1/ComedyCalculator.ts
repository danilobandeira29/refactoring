import PerformanceCalculator from "./PerformanceCalculator";

export default class ComedyCalculator extends PerformanceCalculator {
    amount(): number {
        let amount = 30000;
        if (this.performance.audience > 20) {
            amount += 10000 + 500 * (this.performance.audience - 20);
        }
        amount += 300 * this.performance.audience;
        return amount;
    }

    volumeCreditsFor(): number {
        return super.volumeCreditsFor() + Math.floor(this.performance.audience / 5);
    }
}
