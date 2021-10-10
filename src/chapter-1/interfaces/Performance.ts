import { PlayType } from "./PlayType";

export default interface Performance {
    playID: string;
    audience: number;
    play: {
        name: string;
        type: PlayType;
    }
    amount: number;
}
