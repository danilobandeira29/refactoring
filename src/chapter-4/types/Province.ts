export type ProvinceType = {
    name: string;
    demand: number;
    price: number;
    producers: {
        name: string;
        cost: number;
        production: number;
    }[];
}
