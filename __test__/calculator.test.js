import calculator from '../lib/calculator';

it('add numbers', () => {
  const arr = [1, 3, 4, 3];
  const outputValue = calculator().add(...arr).currentValue;
  expect(outputValue).toBe(11);
});

it('subtract numbers', () => {
  const arr = [1, 3, 4, 3];
  const outputValue = calculator().subtract(...arr).currentValue;
  expect(outputValue).toBe(-11);
});

it('multiply numbers', () => {
  const arr = [1, 3, 4, 3];
  const outputValue = calculator().multiply(...arr).currentValue;
  expect(outputValue).toBe(36);
});

it('divide numbers', () => {
  const arr = [4, 2];
  const outputValue = calculator().divide(...arr).currentValue;
  expect(outputValue).toBe(2);
});