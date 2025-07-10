function mySlice(arr, start, end) {
  let result = [];

  // Handle undefined start/end
  if (start === undefined) start = 0;
  if (end === undefined) end = arr.length;

  // Handle negative indexes
  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;

  // Clamp values within range
  start = Math.max(0, start);
  end = Math.min(arr.length, end);

  // Copy elements from start to end (exclusive)
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }

  return result;
}
