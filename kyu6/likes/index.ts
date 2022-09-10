// Link https://www.codewars.com/kata/5266876b8f4bf2da9b000362/typescript

export function likes(a : string[]) {
  if (!a.length) return 'no one likes this';

  const [first, second, third] = a;
  const others = a.length - 2;

  if (a.length > 3) {
    return `${first}, ${second} and ${others} others like this`;
  }

  if (a.length === 3) {
    return `${first}, ${second} and ${third} like this`;
  }

  if (a.length === 2) {
    return `${first} and ${second} like this`;
  }

  return `${first} likes this`;
}
