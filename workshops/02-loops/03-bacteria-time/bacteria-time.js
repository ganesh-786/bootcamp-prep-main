// YOUR CODE BELOW
function bacteriaTime(curr, tar) {
  let result = 0;
  if (curr > tar) return "targetNum must be larger than currentNum";
  for (i = curr; i < tar; ) {
    i = i * 2;
    result = result + 20;
  }
  return result;
}
