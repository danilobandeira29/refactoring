import Shipment_OLD from "./Shipment_OLD";

describe("Shipment", function() {
    it("should return tracking information that's company name and tracking number", function() {
        const shipment = {
            company_name: "DB",
            tracking_number: 4444
        };
        expect(new Shipment_OLD(shipment).getTracking()).toEqual("DB: 4444");
    })
})
