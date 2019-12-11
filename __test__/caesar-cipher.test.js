import caesar from '../lib/caesar-cipher';

it('basic caesar cipher', () => {
  const input = caesar.cipher('example', 5);
  const expectedOutput = 'jcfruqj';
  expect(input).toBe(expectedOutput);
});