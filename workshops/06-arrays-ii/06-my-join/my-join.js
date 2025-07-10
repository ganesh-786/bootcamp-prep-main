// YOUR CODE BELOW
function myJoin(arr, jo = ",") {
  const safestrings = arr.map((el) => (el == null ? "" : String(el)));
  return safestrings.join(jo);
}
