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

        it("zero demand", function() {
            asia.setDemand("0");
            expect(asia.getShortfall()).toEqual(-25);
            expect(asia.getProfit()).toEqual(0);
        })

        it("negative demand", function() {
            asia.setDemand("-1");
            expect(asia.getShortfall()).toEqual(-26);
            expect(asia.getProfit()).toEqual(-10);
        })

        it("empty string demand", function() {
            asia.setDemand("");
            expect(asia.getShortfall()).toEqual(NaN);
            expect(asia.getProfit()).toEqual(NaN);
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
            };
            noProducers = new Province(provinceWithoutProducers);
        })

        it("shortfall", function() {
            expect(noProducers.getShortfall()).toEqual(30);
        })

        it("profit", function() {
            expect(noProducers.getProfit()).toEqual(0);
        })
    })

    describe("string for producers", function() {
        it("empty string", function() {
            const provinceWithStringProducers: ProvinceType = {
                name: "string_producers",
                producers: "" as unknown as Array<{name: string, cost: number, production: number}>,
                demand: 0,
                price: 20
            };
            const province = new Province(provinceWithStringProducers);
            expect(province.getShortfall()).toEqual(0);
        })
    })
})
