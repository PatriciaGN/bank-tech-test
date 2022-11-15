class StatementPrinter {
  constructor(bank) {
    this.operations = bank.operations;
  }

  printCreditOrDebit(operation) {
    let amount = operation[1].toFixed(2);
    if (operation[0] === 'deposit') {
      return `${amount} || `; // toFixed(2) converts the value into a two decimals float
    } else {
      return `|| ${amount} `;
    }
  }

  printStatement() {
    let statement = 'date || credit || debit || balance';

    if (this.operations.length != 0) {
      this.operations
        .reverse()
        .forEach(
          (operation) =>
            (statement += `\n${operation[2]} || ${this.printCreditOrDebit(
              operation
            )}|| ${operation[3].toFixed(2)}`)
        );
    }
    return statement;
  }
}

module.exports = StatementPrinter;
