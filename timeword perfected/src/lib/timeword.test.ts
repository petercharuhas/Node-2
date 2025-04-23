import { describe, it, expect } from 'vitest';
import { timeToWords } from './timeword';

describe('timeToWords', () => {
  const testCases = [
    { input: '00:00', expected: 'midnight' },
    { input: '00:12', expected: 'twelve twelve am' },
    { input: '01:00', expected: "one o'clock am" },
    { input: '06:01', expected: 'six oh one am' },
    { input: '06:10', expected: 'six ten am' },
    { input: '06:18', expected: 'six eighteen am' },
    { input: '06:30', expected: 'six thirty am' },
    { input: '10:34', expected: 'ten thirty four am' },
    { input: '12:00', expected: 'noon' },
    { input: '12:09', expected: 'twelve oh nine pm' },
    { input: '23:23', expected: 'eleven twenty three pm' }
  ];

  testCases.forEach(({ input, expected }) => {
    it(`converts "${input}" to "${expected}"`, () => {
      expect(timeToWords(input)).toBe(expected);
    });
  });

  it('throws an error for invalid time format', () => {
    expect(() => timeToWords('25:00')).toThrow();
    expect(() => timeToWords('12:60')).toThrow();
    expect(() => timeToWords('1:30')).toThrow();
    expect(() => timeToWords('invalid')).toThrow();
  });
});