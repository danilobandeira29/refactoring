import createBird from "./BirdFactory";
import AfricanSwallow from "./AfricanSwallow";
import NorwegianBlueParrot from "./NorwegianBlueParrot";

describe("Bird Factory Suite", function() {

    test("should create AfricanSwallow", function() {
        expect(createBird({ name: "AfricanSwallow", type: "AfricanSwallow", numberOfCoconuts: 4 })).toBeInstanceOf(AfricanSwallow);
    });

    test("should create NorwegianBlueParrot", function() {
        expect(createBird({ name: "NorwegianBlueParrot", type: "NorwegianBlueParrot"})).toBeInstanceOf(NorwegianBlueParrot);
    });

    test("should throw when try create a non-existent Bird type", function() {
        expect(() => createBird({ name: "NonExistentType", type: "NonExistentType" as any })).toThrow("Non-existent Bird type.");
    });
})