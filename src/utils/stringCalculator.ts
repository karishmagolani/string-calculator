export function add(numbers: string): number {
  if (numbers === "") return 0;
  const numArr = numbers.split(",");
  return numArr.reduce((sum, curr) => sum + parseInt(curr), 0);
}
