export default function analysis(input) {
  const validate = input => Array.isArray(input);
  if (!validate(input)) throw new Error('Input should be a array');

  const average = input => input.reduce((accum, curVal) => accum + curVal) / input.length;
  return {
    average: average(input),
    min: Math.min(...input),
    max: Math.max(...input),
    length: input.length,
  };
}
