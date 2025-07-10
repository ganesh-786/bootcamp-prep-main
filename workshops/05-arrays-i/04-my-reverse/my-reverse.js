// YOUR CODE BELOW
function myReverse(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}
