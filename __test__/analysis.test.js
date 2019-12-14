import analysis from '../lib/analysis';

it('test analysis as whole', () => {
  const output = analysis([1, 8, 3, 4, 2, 6]);
  const exceptedOutput = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(output).toStrictEqual(exceptedOutput);
});

it('bad input as string behalf of array', () => {
  const badCall = () => {
    analysis('ad');
  };

  expect(badCall).toThrow(new Error('Input should be a array'));
});
