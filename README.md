# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @dpappo/lotide`

**Require it:**

`const _ = require('@dpappo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(...)`: console logging a shallow compare of arrays
- `assertEqual(...)`: console logs a shallow compare of primitives
- `assertObjectsEqual(...)`: console logging a shallow compare of objects
- `countOnly(...)`: counts items in arrays and objects
- `eqArray(...)`: shallow compare of arrays
- `eqObject(...)`: shallow compare of objects
- `findKey(...)`: takes an object and callback, and if true returns the individual item
- `findKeyByValue(...)`: takes an object and value, and returns the value if true
- `flatten(...)`: converts multi-dimension array to single dimension array
- `head(...)`: returns first item in a array
- `letterPositions(...)`: returns the position of letters within a string
- `map(...)`: performs a function to every item of an array and returns new array with output
- `middle(...)`: outputs the middle character(s) of a string
- `recursiveEqArray(...)`: deep comparison of arrays
- `recursiveEqObject(...)`: deep comparison of objects
- `reverse(...)`: reverses a string
- `tail(...)`: returns array without first element
- `takeUntil(...)`: returns array until value parameter is reached
- `without(...)`: returns array with elements removed
