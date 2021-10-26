import Province from "./Province";
import ProvinceMock from "./ProvinceMock";
import {ProvinceType} from "./types/Province";

describe("Province suite", function() {
    describe("province", function() {
        let asia: Province;

        beforeEach(function() {
            asia = new Province(ProvinceMock.create());
        })

        it("shortfall", function() {
            expect(asia.getShortfall()).toEqual(5);
        })

        it("profit", function() {
            expect(asia.getProfit()).toEqual(230);
        })

        it("change production", function() {
            asia.producers[0].production = 20;
            expect(asia.getShortfall()).toEqual(-6);
            expect(asia.getProfit()).toEqual(292);
        })
    })

    describe("no producers", function() {
        let noProducers: Province;

        beforeEach(function() {
            const provinceWithoutProducers: ProvinceType = {
                name: "no_producers",
                producers: [],
                demand: 30,
                price: 20
            }
            noProducers = new Province(provinceWithoutProducers)
        })

        it("shortfall", function() {
            expect(noProducers.getShortfall()).toEqual(30)
        })
    })
})
