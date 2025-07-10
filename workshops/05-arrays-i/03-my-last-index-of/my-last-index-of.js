// YOUR CODE BELOW
function myLastIndexOf(arr, tar, start) {
  if (start === undefined || start >= arr.length) {
    start = arr.length - 1;
  }
  for (let i = start; i > 0; i--) {
    if (arr[i] === tar) {
      return i;
    }
  }
  return -1;
}
