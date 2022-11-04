export function createPhoneNumber(numbers: number[]): string {
  if (numbers.length !== 10) return 'Invalid phone number';
  const [a, b, c, d, e, f, g, h, i, j] = numbers;
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}
