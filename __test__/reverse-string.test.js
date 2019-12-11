import reverseString from '../lib/reverse-string';

it('reverse a word string', () => {
  const input = reverseString('reverseme');
  const expectedOutput = 'emesrever';
  expect(input).toBe(expectedOutput);
});