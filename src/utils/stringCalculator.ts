export function add(numbers: string): number {
  if (numbers === "") return 0;
  const num = parseInt(numbers, 10);
  return isNaN(num) ? 0 : num;
}
