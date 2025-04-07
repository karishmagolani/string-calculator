import { add } from "../utils/stringCalculator.ts";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });
});

test("returns number when a single number is provided", () => {
  expect(add("1")).toBe(1);
});

test("returns sum when two numbers are provided", () => {
  expect(add("1,5")).toBe(6);
});
