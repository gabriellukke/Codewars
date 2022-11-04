export function toWeirdCase(string: string) {
  const words = string.split(' ');
  let result = '';
  const odd = (index: number) => index % 2 === 0;

  words.forEach((word, index) => {
    for (let i = 0; i < word.length; i++) {
      if (odd(i)) {
        result += word[i].toUpperCase();
      } else {
        result += word[i].toLowerCase();
      }
    }
    if (index !== words.length - 1) {
      result += ' ';
    }
  });
  return result;
}
