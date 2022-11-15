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
    let operation = 'deposit';
    this.errorHandling(operation, amount);

    this.operations.push([operation, amount, date, (this.balance += amount)]);
  }

  makeWithdrawal(amount, date) {
    let operation = 'withdrawal';
    this.errorHandling(operation, amount);
    this.operations.push([operation, amount, date, (this.balance -= amount)]);
  }
}

module.exports = Bank;
