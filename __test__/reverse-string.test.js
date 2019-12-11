import reverseString from '../lib/reverse-string';

it('reverse a word string', () => {
  const input = reverseString('reverseme');
  const expectedOutput = 'emesrever';
  expect(input).toBe(expectedOutput);
});

it('bad input as number to reverse string', () => {
  const badCall = () => {
    reverseString(1);
  };

  expect(badCall).toThrow(new Error('Input is not string'));
});