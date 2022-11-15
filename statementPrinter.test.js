const StatementPrinter = require('./statementPrinter');

describe('StatementPrinter', () => {
  it('prints a bank statement when no operations have been made', () => {
    expect(statementPrinter.printStatement()).toEqual(
      'date || credit || debit || balance'
    );
  });

  it('prints a bank statement when one deposit has been made', () => {
    const fakeBank = {
      balance: 1000,
      operations: [['deposit', 1000, '10-01-2023', 1000]],
    };
    statementPrinter = new StatementPrinter(fakeBank);
    expect(statementPrinter.printStatement()).toEqual(
      'date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00'
    );
  });
});
