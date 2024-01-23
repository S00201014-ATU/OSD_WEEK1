import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('Matthew Murphy|should return an array containing the currencies', () => {
    const currencies = getCurrencies();
    expect(currencies).toContain('USD');
    expect(currencies).toContain('GBP');
    expect(currencies).toContain('EUR');
  });
  it('S00201014|should say CAD not in array', () => {
    const currencies = getCurrencies();
    expect(currencies).not.toContain('CAD');
  });
});
