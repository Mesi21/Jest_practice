export default function capitalizeString(str) {
  if (typeof str !== 'string') throw new Error('Input is not string');
  const arr = str.split(' ');
  const capArr = arr.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restWord = word.slice(1);
    return firstLetter + restWord;
  });
  return capArr.join(' ');
}
