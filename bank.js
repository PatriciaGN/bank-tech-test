class Bank {
  constructor() {
    this.balance = 0;
  }

  deposit(amount, date) {
    if (amount <= 0 || isNaN(parseFloat(amount))) {
      throw new TypeError('TypeError');
    }
    this.balance += amount;
  }
}

module.exports = Bank;
