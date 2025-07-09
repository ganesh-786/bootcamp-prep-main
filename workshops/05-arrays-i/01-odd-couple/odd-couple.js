// YOUR CODE BELOW
// ### Odd Couple

// Define a function, `oddCouple`, that accepts an array of numbers as an argument.

// `oddCouple` should return a new array with the first two odd numbers from the
// original array:

// ```javascript
// oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
// ```

// If fewer than two odd numbers exist in the original array, return an empty array
// or an array with the only odd number:

// ```javascript
// oddCouple([10, 15, 20]); // => [15]
// oddCouple(2, 4, 6, 8); // => []
// ```

function oddCouple(arr) {
  let arr1 = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      if (arr1.length < 2) {
        arr1.push(arr[i]);
      }
    }
  }
  return arr1;
}
