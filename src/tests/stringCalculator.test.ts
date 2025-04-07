import { add } from "../utils/stringCalculator.ts";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number when a single number is provided", () => {
    expect(add("1")).toBe(1);
  });

  test("returns sum when two numbers are provided", () => {
    expect(add("1,5")).toBe(6);
  });

  test("returns sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles newlines as delimiters along with commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiters specified in the format //delimiter\\n", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
