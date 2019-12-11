import capitalizeString from '../lib/capitalize';

// eslint-disable-next-line no-undef
it('capitalize input string', () => {
  const input = capitalizeString('example string to test the function');
  const expectedOutput = 'Example String To Test The Function';
  expect(input).toBe(expectedOutput);
});