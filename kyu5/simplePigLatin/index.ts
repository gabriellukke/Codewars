export function pigIt(phrase: string): string {
  const words = phrase.split(' ');
  const pigLatinWords = words.map((word) => {
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
    return `${restOfWord}${firstLetter}ay`;
  });
  const pigLatinPhrase = pigLatinWords.join(' ');

  return pigLatinPhrase;
}

