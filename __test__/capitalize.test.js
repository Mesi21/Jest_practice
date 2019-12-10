import capitalizeString from '../lib/capitalize.js';

it('capitalize input string', () => {
  expect(capitalizeString('example string to test the function')).toBe('Example String To Test The Function');
});