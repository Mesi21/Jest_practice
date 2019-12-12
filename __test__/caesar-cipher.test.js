import caesar from '../lib/caesar-cipher';

it('basic caesar cipher', () => {
  const input = caesar.cipher('abcde', 2);
  const expectedOutput = 'cdefg';
  expect(input).toBe(expectedOutput);
});

it('caesar cipher z with shift 2', () => {
  const input = caesar.cipher('z', 2);
  const expectedOutput = 'b';
  expect(input).toBe(expectedOutput);
});

it('keep same the case', () => {
  const input = caesar.cipher('zZ', 2);
  const expectedOutput = 'bB';
  expect(input).toBe(expectedOutput);
});

it('no shift for special chars ', () => {
  const input = caesar.cipher('zZ@#', 2);
  const expectedOutput = 'bB@#';
  expect(input).toBe(expectedOutput);
});

it('shift special alphabet letters ', () => {
  const input = caesar.cipher('éèê', 1);
  const expectedOutput = 'fff';
  expect(input).toBe(expectedOutput);
});
