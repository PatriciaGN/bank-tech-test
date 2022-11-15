class StatementPrinter {
  constructor(bank) {
    this.balance = bank.balance;
    this.operations = bank.operations;
  }

  printStatement() {
    let statement = 'date || credit || debit || balance';
    function printOperations(operation) {
      if (operation[0] === 'deposit') {
        statement += `\n${operation[2]} || ${operation[1].toFixed(
          2
        )} || || ${operation[3].toFixed(2)}`;
      }
    }
    if (this.operations.length != 0) {
      this.operations
        .reverse()
        .forEach((operation) => printOperations(operation));
    }
    return statement;
  }
}

module.exports = StatementPrinter;
