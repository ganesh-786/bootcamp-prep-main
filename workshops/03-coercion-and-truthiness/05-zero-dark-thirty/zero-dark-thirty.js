// // YOUR CODE BELOW
// ### Zero Dark Thirty

// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// `zeroDarkThirty` should return a number with all of the zeroes removed:

// ```javascript
// zeroDarkThirty(102302) // => 1232
// zeroDarkThirty(606.203) // => 66.23
// ```

// If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// ```javascript
// zeroDarkThirty(0) // => NaN
// ```
function zeroDarkThirty(a) {
  let result = 1;
  if (a === 0) return NaN;
  for (i = 0; i < a.lenght; i++) {
    if (a[i] === 0) {
      continue;
      result += 0;
    }
  }
  return result;
}
