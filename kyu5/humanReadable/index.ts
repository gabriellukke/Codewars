export function humanReadable(seconds:number):string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);
  const secs = seconds - (hours * 3600) - (minutes * 60);

  const zeroFormater = (n:number) => n < 10 ? `0${n}` : n;

  return `${zeroFormater(hours)}:${zeroFormater(minutes)}:${zeroFormater(secs)}`;
}
