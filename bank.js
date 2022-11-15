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
    this.operations.push(['deposit', amount, date, this.balance]);
  }

  makeWithdrawal(amount, date) {
    this.errorHandling('withdrawal', amount);
    this.balance -= amount;
  }
}

module.exports = Bank;
