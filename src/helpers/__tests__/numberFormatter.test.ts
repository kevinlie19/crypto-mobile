import { numberToCurrency, numberToPercentage } from '../numberFormatter';

describe('numberToCurrency test case', () => {
  it('should convert to the exact currency', () => {
    expect(
      numberToCurrency({
        num: 14970,
      }),
    ).toEqual('Rp 14.970');
  });

  it('should convert to the exact percentage', () => {
    expect(
      numberToPercentage({
        num: 56.85,
      }),
    ).toBe('56.85%');
  });
});
