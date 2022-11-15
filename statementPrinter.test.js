const StatementPrinter = require('./statementPrinter');
const Bank = require('./bank.js');

describe('StatementPrinter', () => {
  let bank;
  let statementPrinter;
  beforeEach(() => {
    bank = new Bank();
    statementPrinter = new StatementPrinter(bank);
  });

  it('prints a bank statement when no operations have been made', () => {
    expect(statementPrinter.printStatement()).toEqual(
      'date || credit || debit || balance'
    );
  });

  it('prints a bank statement when one deposit has been made', () => {
    fakeDate = '10-12-2023';
    bank.makeDeposit(1000.0);
    expect(statementPrinter.printStatement()).toEqual(
      'date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00'
    );
  });
});
