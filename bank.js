const DateStamp = require('./dateStamp');

class Bank {
  constructor(operations = []) {
    this.balance = 0;
    this.operations = operations;
  }

  errorHandling(operationType, amount) {
    if (amount <= 0 || isNaN(parseFloat(amount))) {
      throw new TypeError('TypeError');
    }
    if (operationType === 'withdrawal') {
      if (amount > this.balance) {
        throw new Error('Insuficient funds');
      }
    }
  }

  makeDeposit(amount, date = new DateStamp().getDate()) {
    let operationType = 'deposit';
    this.errorHandling(operationType, amount);
    this.operations.push([
      operationType,
      amount,
      date,
      (this.balance += amount),
    ]);
  }

  makeWithdrawal(amount, date = new DateStamp().getDate()) {
    let operationType = 'withdrawal';
    this.errorHandling(operationType, amount);
    this.operations.push([
      operationType,
      amount,
      date,
      (this.balance -= amount),
    ]);
  }
}

module.exports = Bank;
