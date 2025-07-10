// YOUR CODE BELOW
function lastFridayNight(arr) {
  let sum = 0;
  for (let a in arr) {
    // if (a === "amount") {
    // }
    let curr = arr[a];
    sum += curr.amount;
  }
  return sum;
}
