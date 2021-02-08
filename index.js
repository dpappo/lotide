const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");
const map = require("./map");
const recursiveEqArrays = require("./recursiveEqArrays");
const recursiveEqObjects = require("./recursiveEqObjects");
const reverse = require("./reverse");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  head: head,
  tail: tail,
  without: without,
  takeUntil: takeUntil,
  reverse: reverse,
  recursiveEqObjects: recursiveEqObjects,
  recursiveEqArrays: recursiveEqArrays,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  middle: middle,
};
