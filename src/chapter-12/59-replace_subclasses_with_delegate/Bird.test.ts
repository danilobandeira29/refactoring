import NorwegianBlueParrot from "./NorwegianBlueParrot";
import Bird from "./Bird";

describe("Bird SUITE", function() {
    test("should calculate airSpeedVelocity of an EuropeanSwallow", function() {
        expect(new Bird({ name: "EuropeanSwallow", type: "EuropeanSwallow" }).airSpeedVelocity).toEqual(35);
    });

    test("should calculate airSpeedVelocity of an AfricanSwallow", function() {
        expect(new Bird({ name: "AfricanSwallow", type: "AfricanSwallow", numberOfCoconuts: 40 }).airSpeedVelocity).toEqual(40);
    });

    test("should calculate airSpeedVelocity of a NorwegianBlueParrot with nail", function() {
        expect(new NorwegianBlueParrot({ name: "NorwegianBlueParrot", voltage: 4, isNailed: true }).airSpeedVelocity).toEqual(0);
    });

    test("should calculate airSpeedVelocity of a NorwegianBlueParrot without nail", function() {
        expect(new NorwegianBlueParrot({ name: "NorwegianBlueParrot", voltage: 4, isNailed: false }).airSpeedVelocity).toEqual(10.4);
    });

    test("should plumage of a NorwegianBlueParrot be beautiful because the voltage is lower then 100", function() {
        expect(new NorwegianBlueParrot({ name: "NorwegianBlueParrot", voltage: 100, isNailed: false }).plumage).toEqual("beautiful");
    });

    test("should plumage of a NorwegianBlueParrot be beautiful because the voltage is greater then 100", function() {
        expect(new NorwegianBlueParrot({ name: "NorwegianBlueParrot", voltage: 101, isNailed: false }).plumage).toEqual("scorched");
    });
});
