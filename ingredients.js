const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//While Loop that prints out the contents of ingredients
console.log("Contents of ingredients for Banana Bread");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
console.log("Contents of ingredients for Banana Bread");
for (i=0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

//Any Loop (While or For) that prints out the contents of ingredients backwards

console.log("Contents of ingredients for Banada Bread - Reverse Order");
let i = ingredients.length - 1;
while (i >= 0) {
  console.log(ingredients[i]);
  i--;
}