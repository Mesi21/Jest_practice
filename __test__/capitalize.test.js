import capitalizeString from '../lib/capitalize.js';

// eslint-disable-next-line no-undef
it('capitalize input string', () => {
  // eslint-disable-next-line no-undef
  expect(capitalizeString('example string to test the function')).toBe('Example String To Test The Function');
});