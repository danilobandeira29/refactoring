interface TrackingInformationDto {
    company_name: string;
    tracking_number: number
}

export default class Shipment {
    private readonly shippingCompany: string;
    private readonly trackingNumber: number;

    constructor(tracking_dto: TrackingInformationDto) {
        this.shippingCompany = tracking_dto.company_name;
        this.trackingNumber = tracking_dto.tracking_number;
    }

    tracking(): string {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}
