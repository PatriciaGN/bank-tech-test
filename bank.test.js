const Bank = require('./bank.js');

describe('Bank', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
  });

  it('displays the default balance', () => {
    expect(bank.balance).toEqual(0);
  });

  it('balance changes when user makes a deposit', () => {
    bank.makeDeposit(1000, '10-01-2023');
    expect(bank.balance).toEqual(1000);
  });

  it('balance changes when more two deposits are made', () => {
    bank.makeDeposit(1000, '10-01-2023');
    bank.makeDeposit(500, '15-01-2023');
    expect(bank.balance).toEqual(1500);
  });

  it('throws an error if amount is a negative number', () => {
    expect(() => {
      bank.makeDeposit(-200, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount equals zero', () => {
    expect(() => {
      bank.makeDeposit(0, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a string', () => {
    expect(() => {
      bank.makeDeposit('string', '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a boolean', () => {
    expect(() => {
      bank.makeDeposit(true, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if a user tries to withdraw money and balance is zero', () => {
    expect(() => {
      bank.makeWithdrawal(500, '15-01-2023');
    }).toThrow('Insuficient funds');
  });

  it('throws an error if user tries to withdraw money and the amount is larger than the balance', () => {
    bank.makeDeposit(200, '10-01-2023');
    console.log(bank.balance);

    expect(() => {
      bank.makeWithdrawal(600, '15-01-2023');
    }).toThrow('Insuficient funds');
  });

  it('calculates the correct balance when user makes a deposit and withdraws funds', () => {
    bank.makeDeposit(1000, '15-01-2023');
    bank.makeWithdrawal(500, '15-01-2023');
    expect(bank.balance).toEqual(500);
  });

  it('calculates the correct balance when user makes a deposit and withdraws funds', () => {
    bank.makeDeposit(500, '15-01-2023');
    bank.makeDeposit(200, '15-01-2023');

    bank.makeWithdrawal(500, '15-01-2023');
    expect(bank.balance).toEqual(200);
  });

  it('throws an error if amount is a negative number', () => {
    expect(() => {
      bank.makeWithdrawal(-200, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount equals zero', () => {
    expect(() => {
      bank.makeWithdrawal(0, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a string', () => {
    expect(() => {
      bank.makeWithdrawal('string', '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a boolean', () => {
    expect(() => {
      bank.makeWithdrawal(true, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('prints a bank statement when at least one operation has been made', () => {
    expect(bank.statement).toEqual('date || credit || debit || balance');
  });
});
