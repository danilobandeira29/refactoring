import Performance from "./Performance";

export default interface Invoice {
    customer: string;
    performances: Performance[];
    totalAmount: number;
    totalVolumeCredits: number;
}
