export default function reverseString(string) {
  if (typeof string !== 'string') throw new Error('Input is not string');
  return string.split('').reverse().join('');
}