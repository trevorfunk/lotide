# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @trevorfunk/lotide`

**Require it:**

`const _ = require('@trevorfunk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

### Funcitions of the Library

* assertArraysEqual(actual, expected): console log if assertion of arrays passes or fails

* assertEqual(actual, expected): console log  if the assertion of primative value passes or fails

* assertObjectsEqual(actual, expected): console log if the assertion of Objects passes or fails

* countLetters(string): count the amount of character in string, and return an object of character count (skip spaces)

* countOnly(Array, object): take in a collection of items and return the counts for a specific subset of those items (only count wanted items)

* eqArrays(actual, expected): return true or false if two arrays are equal

* eqObject(actual, expected): return true or false if two objects are equal

* findKey(object, callBack): input a list(object) and a callBack fn as criteria of the key that is being look for. return the key in String.

* findKeyByValue(object, Value): Takes in an object and a value. It should scan the object and return the first key which contains the given value (undefined if no key has the value)

* flatten(array)): return an array with all nested arrays removed

* head(array): return the element from the first index of the array (return undefined if array is empty)

* letterPositions(String): return an object which gives the index of each character of a given string

* map(array, callback): return given array changed by given callback function

* middle(array): return middle value of an array or two middle values if given an even numbered array

* tail(array): return the element from the last index of the array (return undefined if array is empty)

* takeUntil(array, callback): return an array up until the case from the callback function is met.

* without(array, array): return an array which includes any elements that do not match in the two given arrays