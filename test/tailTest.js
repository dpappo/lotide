const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

// Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", function () {
  it("should yield an empty array for an empty array", function () {
    assert.deepEqual(tail([]), []);
  });

  it("should yield an empty array for a one-element array", function () {
    assert.deepEqual(tail(["one"]), []);
  });

  it("should not change the original array's length", function () {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("should return 2 elements in a 3 element array", function () {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("should return the 2nd element first in a 3 element array", function () {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("should return the 3rd element second in a 3 element array", function () {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
});
