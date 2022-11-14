require;

describe('Bank', () => {
  beforeEach(() => {
    const bank = new Bank();
  });

  it('displays the default balance', () => {
    expect(bank.balance).toEqual(0);
  });
});
