import TrackingInformation_OLD, { TrackingInformationDto } from "./TrackingInformation_OLD";

export default class Shipment_OLD {
    private tracking: TrackingInformation_OLD;

    constructor(tracking_dto: TrackingInformationDto) {
        this.tracking = new TrackingInformation_OLD(tracking_dto);
    }

    getTracking() {
        return this.tracking.display();
    }
}
