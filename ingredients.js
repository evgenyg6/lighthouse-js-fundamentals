var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("List of ingredients (while loop):");
var repeat = 0;
while (repeat < ingredients.length){
  console.log(ingredients[repeat]);
  repeat++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("List of ingredients (for loop):");
for (i = 0; i < ingredients.length; i ++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("List of ingredients backwards (for loop):");
for (i = ingredients.length - 1; i >= 0; i --){
  console.log(ingredients[i]);
}