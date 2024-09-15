let userInput = prompt("What flavor of ice cream do you want? Please enter a comma-separated list", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

let aFlavors = userInput.split(",") 
console.log(aFlavors)

function countFlavors(flavors){
  const counts = {};      //JSON
  for (const flavor of flavors) {
    if (flavor in counts) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}

console.log(countFlavors(aFlavors))