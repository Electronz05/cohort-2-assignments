/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    return numbers.length == 0 ? undefined : numbers.reduce((a, b) => Math.max(a, b));
}

module.exports = findLargestElement;