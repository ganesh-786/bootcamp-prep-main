function mySplice(arr, start, del, tar) {
  let one = [];
  let two = [];

  two.push(...arr.slice(start + del));
  one.push(...arr.slice(0, start));

  if (arguments.length === 4) {
    one.push(tar);
  }

  one.push(...two);
  let deleted = arr.slice(start, start + del);

  arr.length = 0;
  arr.push(...one);

  return deleted;
}
