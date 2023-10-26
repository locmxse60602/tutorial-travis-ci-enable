const assert = require("chai").assert;
const calculator = require("../calculator");

describe("Test calculator.js", () => {
  it("add", () => {
    assert.equal(calculator.add(1, 2), 3);
  });
  it("subtract", () => {
    assert.equal(calculator.subtract(1, 2), -1);
  });
  it("divide", () => {
    assert.equal(calculator.divide(2, 1), 2);
  });
  it("multiply", () => {
    assert.equal(calculator.multiply(1, 2), 2);
  });
});
