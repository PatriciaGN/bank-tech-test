const Bank = require('./bank');
const StatementPrinter = require('./statementPrinter');
const DateStamp = require('./dateStamp');

describe('bank integration', () => {
  it('creates a correct bank statement after several operations', () => {
    let bank = new Bank();
    let statementPrinter = new StatementPrinter(bank);

    bank.makeDeposit(1000, '10/01/2023');
    bank.makeDeposit(2000, '13/01/2023');
    bank.makeWithdrawal(500, '14/01/2023');

    expect(statementPrinter.printStatement()).toEqual(
      'date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'
    );
  });
});
