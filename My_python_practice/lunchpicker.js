/* All functions have been constructed and have yielded correct output in console but fCC testing not
 working properly to pass the code. The first function is not returning the updated lunches array once 
it returns to the position in the program after the function call. I have asked for help. 
*/ T


let lunches = [];
let addedEndItem = "";

function addLunchToEnd(lunches, addedEndItem) {
  //console.log("");
  //console.log(`before=${lunches}`);
  console.log(addedEndItem);
  lunches.push(addedEndItem);
  console.log(lunches.push())
  //console.log(`added=${addedEndItem}`);
  //console.log(lunches);
  return console.log(`${addedEndItem} added to the end of the lunch menu.`);
}
/*
function addLunchToStart (lunches, addedStartItem) {
  console.log("");
  console.log(`before=${lunches}`);
  lunches.unshift(addedStartItem);
  console.log(`added=${addedStartItem}`);
  console.log(lunches);
  return console.log(`${addedStartItem} added to the (start of the lunch menu.`);
}

function removeLastLunch(lunches) {
  console.log("");
  console.log(`before removal = ${lunches}`);
  if (lunches.length != 0) {
    console.log(`${[lunches.pop()]} removed from end of lunch menu.`);
    console.log(`after removal = ${lunches}`);
    return; 
  }
  else {
    console.log("No lunches to remove.");
    return;
  }
}

function removeFirstLunch(lunches) {
  console.log("");
  console.log(`before removal = ${lunches}`);
  if (lunches.length != 0) {
    console.log(`${[lunches.shift()]} removed from the start of lunch menu.`);
    console.log(`after removal = ${lunches}`);
    return; 
  }
  else {
    console.log("No lunches to remove.");
    return;
  }
}

function getRandomLunch(lunches) {
  console.log("");
  if (lunches.length != 0) {
    console.log(`before selection = ${lunches}`);
    console.log(`Ramdomly selected lunch: ${lunches[Math.floor(Math.random() * (lunches.length - 1))]}`);
    console.log(`after selection = ${lunches}`);
    return; 
  }
  else {
    console.log("No lunches available.");
    return;
  }
}

function showLunchMenu(lunches) {
  console.log("");
  if (lunches.length != 0) {
    console.log(`Menu items: [${lunches}]`)
    return;
  }
  else {
    console.log(`The menu is empty.`);
    return;
  }
}
*/

  
addLunchToEnd(lunches, "Tacos");
console.log(lunches);

console.log(lunches);
addLunchToEnd(["Pizza", "Tacos"], "Burger");
//console.log(lunches);
//console.log(addedEndItem);
/*

// reinitialize to lunches = []
console.log("");
lunches.length = 0;
console.log(lunches);

addLunchToStart(lunches, "Sushi");

addLunchToStart(["Burger", "Sushi"], "Pizza");

//lunches.length = 0;
//removeLastLunch(lunches);

removeLastLunch(["Stew", "Soup", "Toast"]);

removeLastLunch(["Sushi", "Pizza", "Noodles"]);

//lunches.length = 0;
//removeFirstLunch(lunches);

removeFirstLunch(["Sushi", "Pizza","Burger"]);

getRandomLunch(lunches);
//console.log(lunches);

lunches = []
showLunchMenu(lunches);

lunches = ["Burger", "Sushi", "Pizza"]
showLunchMenu(lunches);
*/
