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
});
