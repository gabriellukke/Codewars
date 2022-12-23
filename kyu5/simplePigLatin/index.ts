export function pigIt(phrase: string): string {
  const words = phrase.split(' ');
  const pigLatinWords = words.map((word) => {
    if (word.match(/[a-zA-Z]/)) {
      const firstLetter = word[0];
      const restOfWord = word.slice(1);
      return `${restOfWord}${firstLetter}ay`;
    }
    return word;
  });
  const pigLatinPhrase = pigLatinWords.join(' ');

  return pigLatinPhrase;
}

