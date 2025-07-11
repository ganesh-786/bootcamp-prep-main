// YOUR CODE BELOW
function veryOddMutant(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = "normie";
      count = count + 1;
    }
  }
  return arr, count;
}
