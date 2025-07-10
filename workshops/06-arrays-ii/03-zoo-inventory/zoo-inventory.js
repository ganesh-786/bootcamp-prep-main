// YOUR CODE BELOW
function zooInventory(arr2) {
  let all = arr2.map(
    ([name, [another, agess]]) => `${name} the ${another} is ${agess}.`
  );
  return all;
}
