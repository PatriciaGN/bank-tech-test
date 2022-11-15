const DateStamp = require('./dateStamp');
const Error = require('./errors');

class Bank {
  constructor(operations = []) {
    this.balance = 0;
    this.operations = operations;
  }

  makeDeposit(amount, date = new DateStamp().getDate(), error = new Error()) {
    let operationType = 'deposit';
    error.handleDepositErrors(amount);
    this.operations.push([
      operationType,
      amount,
      date,
      (this.balance += amount),
    ]);
  }

  makeWithdrawal(
    amount,
    date = new DateStamp().getDate(),
    error = new Error()
  ) {
    let operationType = 'withdrawal';
    error.handleWithdrawalErrors(amount, this.balance);
    this.operations.push([
      operationType,
      amount,
      date,
      (this.balance -= amount),
    ]);
  }
}

module.exports = Bank;
