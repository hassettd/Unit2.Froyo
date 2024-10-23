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


const result = `Your total order is ${flavors}. Thank you!`;

alert(result);




console.log(getflavors(flavors));

function statusCounter(flavors) {
  let counter = 0;
  for (const flavor of flavors) {
    if (flavors.status == 0) counter += 1;
  }
  return counter;

}



