let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW
function petSounds(ani, country) {
  let currani = animalNoises[0];
  let currcountry = currani.dog;
  let dogk = Object.keys(currcountry);

  let currani1 = animalNoises[1];
  let currcountry1 = currani1.cat;
  let catk = Object.keys(currcountry1);

  let currani2 = animalNoises[2];
  let currcountry2 = currani2.chicken;
  let chickenk = Object.keys(currcountry2);

  if (ani === "dog") {
    for (i = 0; i < 10; i++) {
      if (country === dogk[i]) {
        let output = currani[ani][country];
        let give = "Dogs in " + country + " " + "say " + output;
        return give;
      }
    }
  }

  if (ani === "cat") {
    for (i = 0; i < 10; i++) {
      if (country === catk[i]) {
        let output = currani1[ani][country];
        let give = "Cats in " + country + " " + "say " + output;
        return give;
      }
    }
  }
  if (ani === "chicken") {
    for (i = 0; i < 10; i++) {
      if (country === chickenk[i]) {
        let output = currani2[ani][country];
        let give = "Chickens in " + country + " " + "say " + output;
        return give;
      }
    }
  }
}
