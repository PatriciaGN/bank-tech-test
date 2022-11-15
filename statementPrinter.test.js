const StatementPrinter = require('./statementPrinter');

describe('StatementPrinter', () => {
  it('prints a bank statement when no operations have been made', () => {
    let fakeBank = {
      balance: 0,
      operations: [],
    };
    let statementPrinter = new StatementPrinter(fakeBank);

    expect(statementPrinter.printStatement()).toEqual(
      'date || credit || debit || balance\n'
    );
  });

  it('prints a bank statement when one deposit has been made', () => {
    let fakeBank = {
      balance: 1000,
      operations: [['deposit', 1000, '10/01/2023', 1000]],
    };
    let statementPrinter = new StatementPrinter(fakeBank);
    expect(statementPrinter.printStatement()).toEqual(
      'date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00'
    );
  });

  it('prints a bank statement when two deposits has been made', () => {
    let fakeBank = {
      balance: 3000,
      operations: [
        ['deposit', 1000, '10/01/2023', 1000],
        ['deposit', 2000, '13/01/2023', 3000],
      ],
    };
    let statementPrinter = new StatementPrinter(fakeBank);
    expect(statementPrinter.printStatement()).toEqual(
      'date || credit || debit || balance\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'
    );
  });
});
