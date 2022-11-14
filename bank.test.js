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
    bank.deposit(1000, '10-01-2023');
    expect(bank.balance).toEqual(1000);
  });

  it('balance changes when more two deposits are made', () => {
    bank.deposit(1000, '10-01-2023');
    bank.deposit(500, '15-01-2023');
    expect(bank.balance).toEqual(1500);
  });

  it('throws an error if amount is a negative number', () => {
    expect(() => {
      bank.deposit(-200, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount equals zero', () => {
    expect(() => {
      bank.deposit(0, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a string', () => {
    expect(() => {
      bank.deposit('string', '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a boolean', () => {
    expect(() => {
      bank.deposit(true, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if a user tries to withdraw money and balance is zero', () => {
    expect(() => {
      bank.withdrawal(500, '15-01-2023');
    }).toThrow('Insuficient funds');
  });

  it('throws an error if user tries to withdraw money and the amount is larger than the balance', () => {
    bank.deposit(200, '10-01-2023');
    console.log(bank.balance);

    expect(() => {
      bank.withdrawal(600, '15-01-2023');
    }).toThrow('Insuficient funds');
  });

  it('calculates the correct balance when user makes a deposit and withdraws funds', () => {
    bank.deposit(1000, '15-01-2023');
    bank.withdrawal(500, '15-01-2023');
    expect(bank.balance).toEqual(500);
  });

  it('calculates the correct balance when user makes a deposit and withdraws funds', () => {
    bank.deposit(500, '15-01-2023');
    bank.deposit(200, '15-01-2023');

    bank.withdrawal(500, '15-01-2023');
    expect(bank.balance).toEqual(200);
  });

  it('throws an error if amount is a negative number', () => {
    expect(() => {
      bank.withdrawal(-200, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount equals zero', () => {
    expect(() => {
      bank.withdrawal(0, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a string', () => {
    expect(() => {
      bank.withdrawal('string', '10-01-2023');
    }).toThrow('TypeError');
  });
});
