// Link https://www.codewars.com/kata/5266876b8f4bf2da9b000362/typescript

export function likes(a: string[]) {
  const [first, second, third] = a;
  const others = a.length - 2;

  const obj: { [key: number]: string } = {
    0: 'no one likes this',
    1: `${first} likes this`,
    2: `${first} and ${second} like this`,
    3: `${first}, ${second} and ${third} like this`,
    4: `${first}, ${second} and ${others} others like this`,
  };

  return obj[a.length] || obj[4];
}
