const mysymbol = Symbol("key1");

const user = {
  name: "John",
  age: 30,
  [mysymbol]: "value",
  city: "New York",
  email: "john@gmail.com",
  isLoggingIn: true,
};

// console.log(user["email"]);
// console.log(user[mysymbol])

user.greething = function () {
  console.log("Hello");
};

user.greething2 = function () {
  console.log(`Hello ${this.name}`);
};
// console.log(user.greething());
// console.log(user.greething2());

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

// const allobj= Object.assign({},obj1, obj2, obj3); // use {} to create a new object and merge all the objects into it
const allobj = { ...obj1, ...obj2, ...obj3 }; // use spread operator to merge all the objects into a new object
console.log(allobj);

const person = {
  name: "het",
  age: 20,
};

console.log(Object.keys(person)); // for keys
console.log(Object.values(person)); // for values
console.log(Object.entries(person)); // for entries 

