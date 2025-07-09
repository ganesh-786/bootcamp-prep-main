// YOUR CODE BELOW
function myIndexOf(str, searchValue, startIdx = 0) {
  if (searchValue === "") {
    return startIdx;
  }
  const maxStart = str.length - searchValue.length;
  for (let i = startIdx; i <= maxStart; i++) {
    let found = true;

    for (let j = 0; j < searchValue.length; j++) {
      if (str[i + j] !== searchValue[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }
  return -1;
}
