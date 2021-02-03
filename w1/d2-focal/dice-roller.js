const args = process.argv;

// Function to read input from command line, and return the number of dice being rolled
const diceNumber = function (args) {
  let diceNumber = Number(args.slice(2));
  return diceNumber;
};

// Function to roll the number of desired dice using RandomMath method

const diceRolls = function (diceNumber) {
  const diceString = [];
  for (let i = 0; i < diceNumber; i++) {
    let min = 1;
    let max = 7;
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    diceString.push(randomNum);
  }
  return `Rolled ${diceNumber} dice: ${diceString.join(", ")}`;
};

console.log(diceRolls(diceNumber(args)));