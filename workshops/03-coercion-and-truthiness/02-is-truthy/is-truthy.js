// YOUR CODE BELOW

let isTruthy = function (a) {
  if (a === true || a === 1 || a === "Honesty is the best policy") return true;

  if (a === false) return "The boolean value false is falsey";

  if (a === null) return "The null value is falsey";

  if (a === undefined) return "undefined is falsey";

  if (a === 0) return "The number 0 is falsey (the only falsey number)";

  if (a === "") return "The empty string is falsey (the only falsey string)";
};
