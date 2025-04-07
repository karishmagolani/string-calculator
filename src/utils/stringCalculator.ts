export function add(numbers: string): number {
  if (numbers === "") return 0;
  let delimiterRegex = /[\n,]/;
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEndIndex);
    delimiterRegex = new RegExp(`[${customDelimiter}\n]`);
    numString = numbers.substring(delimiterEndIndex + 1);
  }
  const numArr = numString.split(delimiterRegex);
  const nums = numArr.map((n) => parseInt(n));
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
  return nums.reduce((sum, curr) => sum + curr, 0);
}
