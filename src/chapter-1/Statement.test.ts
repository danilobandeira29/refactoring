import htmlStatement from "./Statement";
const invoices = require('./mocks/Invoices.json')
const plays = require('./mocks/Plays.json')

describe("Statement SUITE", function() {
    test('statement', function() {
        const statement_html = htmlStatement(invoices, plays);
        expect(statement_html).toMatchSnapshot();
    });
});
