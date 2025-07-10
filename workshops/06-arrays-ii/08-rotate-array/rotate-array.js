// YOUR CODE BELOW
function rotateArray(arr, num) {
  if (num === 0) return arr.slice();
  let len = arr.length;
  const k = ((num % len) + len) % len;

  let tail = arr.slice(len - k);
  let head = arr.slice(0, len - k);
  return tail.concat(head);
}
