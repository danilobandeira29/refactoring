import statement from "./Statement";
const invoices = require('./mocks/Invoices.json')
const plays = require('./mocks/Plays.json')

describe("Statement SUITE", function() {
    test('statement', function() {
        const statement_string = statement(invoices, plays);
        expect(statement_string).toMatchSnapshot();
    });
});
