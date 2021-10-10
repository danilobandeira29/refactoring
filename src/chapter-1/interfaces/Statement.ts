import Performance from "./Performance";

export default interface Statement {
    customer: string;
    performances: Performance[];
    totalAmount: number;
    totalVolumeCredits: number;
}
