import Bird from "./Bird";
import SpeciesDelegate from "./SpeciesDelegate";

export interface NorwegianBlueParrotDelegateDto {
    voltage: number;
    isNailed: boolean;
}

export default class NorwegianBlueParrotDelegate extends SpeciesDelegate {
    private readonly _voltage: number;
    private readonly _isNailed: boolean;

   constructor(dto: NorwegianBlueParrotDelegateDto, bird: Bird) {
       super({ props: dto, bird })
       this._voltage = dto.voltage;
       this._isNailed = dto.isNailed;
   }

   get airSpeedVelocity(): number | null {
        return this._isNailed ? 0 : 10 + this._voltage / 10;
   }

   get plumage(): string {
        return this._voltage > 100 ? "scorched" : "beautiful";
   }
}