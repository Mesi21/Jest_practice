import reverseString from '../lib/reverse.js';

it('reverse input string', () => {
  expect(reverseString('This is my string to reverse.')).toBe('.esrever ot gnirts ym si sihT');
});

it('Input is not a string', () => {
  expect(reverseString(25)).toBe('Input is not a string');
});