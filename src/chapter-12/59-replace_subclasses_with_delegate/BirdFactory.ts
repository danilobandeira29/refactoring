import Bird, {BirdDto} from "./Bird";
import AfricanSwallow, {AfricanSwallowDto} from "./AfricanSwallow";
import NorwegianBlueParrot, {NorwegianBlueParrotDto} from "./NorwegianBlueParrot";

export type Birds = BirdDto | AfricanSwallowDto | NorwegianBlueParrotDto;

type CreateBirdDto = Birds & {
    type: "EuropeanSwallow" | "AfricanSwallow" | "NorwegianBlueParrot";
}

export default function createBird(dto: CreateBirdDto): Bird {
    switch (dto.type) {
        case "AfricanSwallow":
            return new AfricanSwallow(dto as AfricanSwallowDto);
        case "NorwegianBlueParrot":
            return new NorwegianBlueParrot(dto as NorwegianBlueParrotDto);
        default: throw new Error("Non-existent Bird type.");
    }
}