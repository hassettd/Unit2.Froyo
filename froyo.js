const userInputString = prompt(
    "Please enter some Froyo flavors you would like, separated by commas.",
    ""
  );
  
  // Split the string of numbers into an array of strings.
  const flavors = userInputString.split(",");

function getflavors(flavors) {
  const count = {};

for (const flavor of flavors) {
  if (count[flavor]) {
    count[flavor] += 1;
  } else {
    count[flavor] = 1;
  }
}
return count;
}
console.log(getflavors(flavors));

