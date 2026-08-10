// ------------------------For Loop-----------------------
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} + ${j} = ${i * j}`);
  }
}

// ------------------------While Loop---------------
let i = 1;
while (i <= 10) {
  // console.log(`Number Loop: ${i}`);
  i++;
}

// ----------------------Do While Loop---------------
let score = 100;
do {
  // console.log(`${score}`);
  score++;
} while (score <= 105);

// ----------------------For Of Loop---------------
for (const letter of "Hello World") {
  // console.log(letter);
}

let myArr = [
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
];
for (const [key, value] of myArr) {
  // console.log(`${key}: ${value}`);
}

let myMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);

for (const [key, value] of myMap) {
  // console.log(`${key}: ${value}`);
}

// ----------------------For In Loop---------------
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  // console.log(`${key}: ${person[key]}`);
}

//--------------------For Each Loop-------------------
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, val, arr) => {
  // console.log(number, val, arr);
});
