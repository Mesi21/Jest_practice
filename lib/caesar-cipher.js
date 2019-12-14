const caesar = (() => {
  const normalize = char => char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const isNotAlphabet = char => /\W/.test(char);
  const shiftChar = (char, shift) => {
    char = normalize(char);
    let charCode = char.charCodeAt();
    if (isNotAlphabet(char)) return char;
    if (char === 'z' || char === 'Z') charCode -= 26;
    return String.fromCharCode(charCode + shift);
  };
  return {
    cipher(string, shift) {
      return string
        .split('')
        .map(char => shiftChar(char, shift))
        .join('');
    },
  };
})();

export default caesar;
