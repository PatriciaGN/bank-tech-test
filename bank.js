class Bank {
  constructor() {
    this.balance = 0;
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

  deposit(amount, date) {
    this.errorHandling('deposit', amount);
    this.balance += amount;
  }

  withdrawal(amount, date) {
    this.errorHandling('withdrawal', amount);
    this.balance -= amount;
  }
}

module.exports = Bank;
