// YOUR CODE BELOW
function myIncludes(arr, tar) {
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] === tar) {
      return true;
    }
  }
  return false;
}
