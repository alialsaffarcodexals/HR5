import { calculateFortnightly } from '../../common/index.js';

describe('Payroll rounding', () => {
  it('divides by 26 and rounds to 3 decimals', () => {
    expect(calculateFortnightly(44245.750)).toBe('1701.759');
    expect(calculateFortnightly(96336.340)).toBe('3705.244');
  });
});
