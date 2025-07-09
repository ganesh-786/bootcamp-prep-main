// YOUR CODE BELOW
function mySlice(str, startIdx = 0, endIdx = str.length) {
  let result = "";
  for (let i = startIdx; i < endIdx; i++) {
    result += str[i];
  }
  return result;
}
