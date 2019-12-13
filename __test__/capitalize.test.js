import capitalizeString from '../lib/capitalize';


it('capitalize input string', () => {
  const input = capitalizeString('example string to test the function');
  const expectedOutput = 'Example String To Test The Function';
  expect(input).toBe(expectedOutput);
});

it('bad input as number to capitalize', () => {
  const badCall = () => {
    capitalizeString(5);
  };

  expect(badCall).toThrow(new Error('Input is not string'));
});