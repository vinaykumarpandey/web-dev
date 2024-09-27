const prompt = require("prompt-sync")(); // Import prompt-sync

/*let age = prompt("Hey, what's your age? ");
console.log(`You are ${age} years old!`);*/

let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += i;
}

console.log(sum);

const obj = {
  Vinay: 100,
  Ankit: 80,
};

for (let a in obj) {
  console.log("The marks of " + a + " in obj are " + obj[a]);
}

for (let b of "Vinay") {
  console.log(b);
}


function add(x, y) {
  return x + y;
}

console.log(add(5, 6));

//arrow function
const avg = (x, y) => {
  return (x + y) / 2;  
}

console.log("avg of a and b is " + avg(5, 6));

//to add prompt - npm install prompt-sync
