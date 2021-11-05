import ReadingRecord from "../interfaces/ReadingRecord";

// possuem os mesmos parâmetros
// utilizar classe para tornar o ambiente comum, que nesse caso é o reading, de forma compartilhada.

function baseCharge(reading: ReadingRecord) {
    return 6/100 * reading.quantity;
}

function taxableCharge(reading: ReadingRecord) {
    return Math.max(0, baseCharge(reading) - 4/100);
}
