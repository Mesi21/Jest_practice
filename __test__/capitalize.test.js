import capitalizeString from '../lib/capitalize';

it('capitalize input string', () => {
  const input = capitalizeString('example string to test the function');
  const expectedOutput = 'Example String To Test The Function';
  expect(input).toBe(expectedOutput);
});