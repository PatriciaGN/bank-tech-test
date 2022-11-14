class Bank {
  constructor() {
    this.balance = 0;
  }

  deposit(amount, date) {
    if (amount <= 0 || amount === 'string') {
      throw new TypeError('TypeError');
    }
    this.balance += amount;
  }
}

module.exports = Bank;
