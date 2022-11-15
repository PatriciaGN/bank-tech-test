const Errors = require('./errors');

describe('Errors', () => {
  let errors;
  beforeEach(() => {
    errors = new Errors();
  });
  it('throws an error if amount is a negative number', () => {
    expect(() => {
      errors.handleDepositErrors(-500);
    }).toThrow('TypeError');
  });

  it('throws an error if amount equals zero', () => {
    expect(() => {
      errors.handleDepositErrors(0);
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a string', () => {
    expect(() => {
      errors.handleDepositErrors('string').toThrow('TypeError');
    });
  });

  it('throws an error if amount is a boolean', () => {
    expect(() => {
      errors.handleDepositErrors(true);
    }).toThrow('TypeError');
  });

  it('throws an error if a user tries to withdraw money and balance is zero', () => {
    expect(() => {
      errors.handleWithdrawalErrors(500, 0);
    }).toThrow('Insuficient funds');
  });

  it('throws an error if user tries to withdraw money and the amount is larger than the balance', () => {
    expect(() => {
      errors.handleWithdrawalErrors(1000, 550);
    }).toThrow('Insuficient funds');
  });

  it('throws an error if amount is a negative number', () => {
    expect(() => {
      errors.handleWithdrawalErrors(-500, 1000);
    }).toThrow('TypeError');
  });

  it('throws an error if amount equals zero', () => {
    expect(() => {
      errors.handleWithdrawalErrors(0, 1000);
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a string', () => {
    expect(() => {
      errors.handleWithdrawalErrors('string', 1000);
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a boolean', () => {
    expect(() => {
      errors.handleWithdrawalErrors(false, 1000);
    }).toThrow('TypeError');
  });
});
