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
  return numArr.reduce((sum, curr) => sum + parseInt(curr), 0);
}
