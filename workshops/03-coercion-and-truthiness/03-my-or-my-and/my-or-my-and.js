// YOUR CODE BELOW
let myOr = function (a, b, c) {
  if (a) {
    return a;
  }
  if (b) {
    return b;
  }
  if (c) {
    return c;
  } else return null;
};

let myAnd = function (x, y, z) {
  if (false == x) return x;
  if (false == y) return y;
  if (false == z) return z;
  else return "yay!";
};
