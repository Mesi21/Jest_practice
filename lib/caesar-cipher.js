const caesar = (() => {
  const shift = (char, shift) => {

  };
  const cipher = (string, shift) => {
    string.split('').map(
      (char) => shift(char, shift),
    ).join('');
  };
  return {
    cipher,
  };
})();

export default caesar;
