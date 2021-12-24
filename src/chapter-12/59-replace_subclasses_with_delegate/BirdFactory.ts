import Bird, {BirdDto} from "./Bird";
import NorwegianBlueParrot, {NorwegianBlueParrotDto} from "./NorwegianBlueParrot";

export type Birds = BirdDto | NorwegianBlueParrotDto;

type CreateBirdDto = Birds & {
    type: "EuropeanSwallow" | "AfricanSwallow" | "NorwegianBlueParrot";
}

export default function createBird(dto: CreateBirdDto): Bird {
    switch (dto.type) {
       case "NorwegianBlueParrot":
            return new NorwegianBlueParrot(dto as NorwegianBlueParrotDto);
        default: throw new Error("Non-existent Bird type.");
    }
}