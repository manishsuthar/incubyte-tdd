const StringCalculator = require("../index");

describe("StringCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(StringCalculator.add("")).toBe(0);
  });

  it("should return the number for a single number", () => {
    expect(StringCalculator.add("5")).toBe(5);
  });

  it("should return the sum of two numbers", () => {
    expect(StringCalculator.add("3,7")).toBe(10);
  });

  it("should handle new lines between numbers", () => {
    expect(StringCalculator.add("1\n2,3")).toBe(6);
  });

  it("should support different delimiters", () => {
    expect(StringCalculator.add("//;\n1;2")).toBe(3);
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => StringCalculator.add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
  });

  it("should ignore numbers larger than 1000", () => {
    expect(StringCalculator.add("2,1001,5")).toBe(7);
  });

  it("should allow delimiters of any length", () => {
    expect(StringCalculator.add("//[***]\n1***2***3")).toBe(6);
  });

  it("should allow multiple delimiters", () => {
    expect(StringCalculator.add("//[*][%]\n1*2%3")).toBe(6);
  });

  it("should allow multiple delimiters with length longer than one char", () => {
    expect(StringCalculator.add("//[**][%%]\n1**2%%3")).toBe(6);
  });
});
