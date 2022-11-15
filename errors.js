class Errors {
  handleDepositErrors(amount) {
    if (amount <= 0 || isNaN(parseFloat(amount))) {
      throw new TypeError('TypeError');
    }
  }

  handleWithdrawalErrors(amount, balance) {
    if (amount <= 0 || isNaN(parseFloat(amount))) {
      throw new TypeError('TypeError');
    }
    if (amount > balance) {
      throw new Error('Insuficient funds');
    }
  }
}

module.exports = Errors;
