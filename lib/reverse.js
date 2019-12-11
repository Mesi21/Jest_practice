export default function reverseString(input) {
  if (typeof input === 'string') {
    const revStr = input.split('').reverse().join('');
    return revStr;
  }
  return 'Input is not a string';
}