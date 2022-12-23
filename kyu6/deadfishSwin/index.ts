export function deadfishSwim(data: string): number[] {
  const result: number[] = [];
  let value = 0;
  const commands = {
    i: () => value++,
    d: () => value--,
    s: () => (value *= value),
    o: () => result.push(value),
  };

  data.split('').forEach((command) => {
    const commandFunc = commands[command as keyof typeof commands];
    commandFunc && commandFunc();
  });
  return result;
}
