import Shipment from "./Shipment";

describe("Shipment", function() {
    it("should return tracking information that's company name and tracking number", function() {
        const tracking_dto = {
            company_name: "DB",
            tracking_number: 4444
        };
        expect(new Shipment(tracking_dto).display()).toEqual("DB: 4444");
    })
})
