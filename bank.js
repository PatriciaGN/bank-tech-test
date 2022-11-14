class Bank {
  constructor() {
    this.balance = 0;
  }

  deposit(amount, date) {
    this.balance = amount;
  }
}

module.exports = Bank;
