const Bank = require('./bank.js');

class StatementPrinter {
  constructor(bank) {
    this.balance = bank.balance;
    this.operations = bank.operations;
  }

  printStatement() {
    return 'date || credit || debit || balance';
  }
}

module.exports = StatementPrinter;
