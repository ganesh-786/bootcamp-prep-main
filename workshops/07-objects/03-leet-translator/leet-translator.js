let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
function leetTranslator(word) {
  let leetmap = {};
  for (let i = 0; i < letters.length; i++) {
    leetmap[letters[i]] = leetChars[i];
  }
  let sumup = [];
  let wordto = word.toLowerCase();
  for (let xy = 0; xy <= word.length; xy++) {
    let currChar = wordto[xy];
    let mapChar = leetmap[currChar];
    sumup.push(mapChar);
  }

  return sumup.join("");
}
