import Account from "./Account";
import AccountType from "./AccountType";

describe("Account suite", function() {
    it("should return 1 because is the interest rate of an account of type corrente", function() {
        const account = new Account({ number: '1', type: new AccountType({ name: 'corrente', interest_rate: 1 }) });
        expect(account.getInterestRate()).toEqual(1);
    })
})
