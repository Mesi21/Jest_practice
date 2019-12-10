export default function capitalizeString(str) {
  const arr = str.split(' ');
  const capArr = arr.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restWord = word.slice(1);
    return firstLetter + restWord;
  });
  return capArr.join(' ');
}
