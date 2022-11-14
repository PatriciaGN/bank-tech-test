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

  it('returns an error if amount is a negative number', () => {
    expect(() => {
      bank.deposit(-200, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('returns an error if amount equals zero', () => {
    expect(() => {
      bank.deposit(0, '10-01-2023');
    }).toThrow('TypeError');
  });

  it('returns an error if amount is a string', () => {
    expect(() => {
      bank.deposit('string', '10-01-2023');
    }).toThrow('TypeError');
  });

  it('returns an error if amount is a boolean', () => {
    expect(() => {
      bank.deposit(true, '10-01-2023');
    }).toThrow('TypeError');
  });

  it("user can't withdraw money if balance is zero", () => {
    expect(() => {
      bank.withdrawal(500, '15-01-2023');
    }).toThrow('Insuficient funds');
  });
});
