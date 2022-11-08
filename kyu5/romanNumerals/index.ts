export function romaNumerals(roman: string): number {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanNumerals[roman[i] as keyof typeof romanNumerals];
    const next = romanNumerals[roman[i + 1] as keyof typeof romanNumerals];

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}
