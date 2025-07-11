// YOUR CODE BELOW
function veryOdd(arr) {
  let odd = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }

  return odd;
}
