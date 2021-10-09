import { PlayType } from "./PlayType";

export default interface Play {
    [key: string]: {
        name: string;
        type: PlayType;
    }
}
