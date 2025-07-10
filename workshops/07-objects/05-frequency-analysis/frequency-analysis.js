// YOUR CODE BELOW
// function frequencyAnalysis(arr, tar) {
//   let count = 0;
//   for (i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === tar) {
//       count = count + 1;
//     }
//   }
//   return count;
// }
function frequencyAnalysis(str) {
  // result object instead of single count
  const freq = {};

  // loop over every character (including last one)
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // skip spaces
    if (char === " ") continue;

    // if we haven’t seen it yet, start at 0, then increment
    if (!freq[char]) {
      freq[char] = 0;
    }
    freq[char] += 1;
  }

  return freq;
}
