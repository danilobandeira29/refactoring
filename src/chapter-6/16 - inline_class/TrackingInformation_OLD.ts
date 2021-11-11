export interface TrackingInformationDto {
    company_name: string;
    tracking_number: number
}

export default class TrackingInformation_OLD {
    private readonly shippingCompany: string;
    private readonly trackingNumber: number;

    constructor(dto: TrackingInformationDto) {
        this.shippingCompany = dto.company_name;
        this.trackingNumber = dto.tracking_number;
    }

    display(): string {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}