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
    bank.makeDeposit(1000);

    expect(bank.balance).toEqual(1000);
  });

  it('balance changes when more two deposits are made', () => {
    bank.makeDeposit(1000);
    bank.makeDeposit(500);

    expect(bank.balance).toEqual(1500);
  });

  it('throws an error if amount is a negative number', () => {
    expect(() => {
      bank.makeDeposit(-200);
    }).toThrow('TypeError');
  });

  it('throws an error if amount equals zero', () => {
    expect(() => {
      bank.makeDeposit(0);
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a string', () => {
    expect(() => {
      bank.makeDeposit('string');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a boolean', () => {
    expect(() => {
      bank.makeDeposit(true);
    }).toThrow('TypeError');
  });

  it('throws an error if a user tries to withdraw money and balance is zero', () => {
    expect(() => {
      bank.makeWithdrawal(500);
    }).toThrow('Insuficient funds');
  });

  it('throws an error if user tries to withdraw money and the amount is larger than the balance', () => {
    bank.makeDeposit(200);
    console.log(bank.balance);
    expect(() => {
      bank.makeWithdrawal(600);
    }).toThrow('Insuficient funds');
  });

  it('calculates the correct balance when user makes a deposit and withdraws funds', () => {
    bank.makeDeposit(1000);
    bank.makeWithdrawal(500);
    expect(bank.balance).toEqual(500);
  });

  it('calculates the correct balance when user makes a deposit and withdraws funds', () => {
    bank.makeDeposit(500);
    bank.makeDeposit(200);

    bank.makeWithdrawal(500);
    expect(bank.balance).toEqual(200);
  });

  it('throws an error if amount is a negative number', () => {
    expect(() => {
      bank.makeWithdrawal(-200);
    }).toThrow('TypeError');
  });

  it('throws an error if amount equals zero', () => {
    expect(() => {
      bank.makeWithdrawal(0);
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a string', () => {
    expect(() => {
      bank.makeWithdrawal('string');
    }).toThrow('TypeError');
  });

  it('throws an error if amount is a boolean', () => {
    expect(() => {
      bank.makeWithdrawal(true);
    }).toThrow('TypeError');
  });

  it('initializes an empty operations array', () => {
    expect(bank.operations).toEqual([]);
  });

  it('stores a deposit into the operations array', () => {
    let date = '10-01-2023';
    bank.makeDeposit(500, date);

    expect(bank.operations).toEqual([['deposit', 500, '10-01-2023', 500]]);
  });

  it('stores two deposits into the operations array', () => {
    let date = '10-01-2023';
    bank.makeDeposit(500, date);
    bank.makeDeposit(600, date);

    expect(bank.operations.length).toBe(2);
  });

  it('stores a withdrawal into the operations array', () => {
    let date = '10-01-23';

    bank.makeDeposit(1000, date);
    bank.makeWithdrawal(500, date);

    expect(bank.operations.length).toBe(2);
  });
});
