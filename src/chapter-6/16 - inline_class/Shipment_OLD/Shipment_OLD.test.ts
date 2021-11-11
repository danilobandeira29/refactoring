import Shipment_OLD from "./Shipment_OLD";

describe("Shipment_OLD", function() {
    it("should return tracking information that's company name and tracking number", function() {
        const tracking_dto = {
            company_name: "DB",
            tracking_number: 4444
        };
        expect(new Shipment_OLD(tracking_dto).tracking.display()).toEqual("DB: 4444");
    })
})
