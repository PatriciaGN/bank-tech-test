class Bank {
  constructor(operations = []) {
    this.balance = 0;
    this.operations = operations;
  }

  errorHandling(operation, amount) {
    if (amount <= 0 || isNaN(parseFloat(amount))) {
      throw new TypeError('TypeError');
    }
    if (operation === 'withdrawal') {
      if (amount > this.balance) {
        throw new Error('Insuficient funds');
      }
    }
  }

  makeDeposit(amount, date) {
    this.errorHandling('deposit', amount);
    this.balance += amount;
    this.operations = [['deposit', 500, '15-01-2023', 500]];
  }

  makeWithdrawal(amount, date) {
    this.errorHandling('withdrawal', amount);
    this.balance -= amount;
  }

  printStatement() {
    return 'date || credit || debit || balance';
  }
}

module.exports = Bank;
