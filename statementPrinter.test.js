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
});
