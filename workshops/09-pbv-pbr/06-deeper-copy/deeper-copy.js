// YOUR CODE BELOW
function deeperCopy(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(item.slice());
    } else {
      result.push(item);
    }
  }
  return result;
}
