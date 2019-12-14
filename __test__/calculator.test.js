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

it('multiple cascade operation test', () => {
  const outputValue = calculator()
    .add(1, 2, 3)
    .subtract(2)
    .divide(2)
    .add(2);
  expect(outputValue.currentValue).toBe(4);
});

it('bad input as string to calculator', () => {
  const badCall = () => {
    calculator().add(1, 2, 'I am bad input');
  };

  expect(badCall).toThrow(new Error('BadInput: Only numbers are allowed as input'));
});