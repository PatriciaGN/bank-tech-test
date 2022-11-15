class StatementPrinter {
  constructor(bank) {
    this.balance = bank.balance;
    this.operations = bank.operations;
  }

  printStatement() {
    let statement = 'date || credit || debit || balance';

    function creditOrDebit(operation) {
      if (operation[0] === 'deposit') {
        return `${operation[1].toFixed(2)} || `; // toFixed(2) converts the value into a two decimals float
      } else if (operation[0] === 'withdrawal') {
        return `|| ${operation[1].toFixed(2)} `;
      }
    }
    if (this.operations.length != 0) {
      this.operations
        .reverse()
        .forEach(
          (operation) =>
            (statement += `\n${operation[2]} || ${creditOrDebit(
              operation
            )}|| ${operation[3].toFixed(2)}`)
        );
    }
    return statement;
  }
}

module.exports = StatementPrinter;
