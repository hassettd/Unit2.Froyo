const arr = ['vanilla','vanilla','vanilla','strawberry','coffee','coffee'];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);

console.log(count.vanilla);
console.log(count.strawberry);
console.log(count.coffee);