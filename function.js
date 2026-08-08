function myName() {
  console.log("H");
  console.log("E");
  console.log("T");
}

// myName()

function sumOfTwoNumbers(n1, n2) {
  //   console.log(n1 + n2); // only prints , no return value
  let sum = n1 + n2;
  return sum;
  console.log(sum); // not print because after return its not executed
}

// sumOfTwoNumbers(5, 10);
const sumnumber= sumOfTwoNumbers(5, 10);
// console.log(sumnumber)

function cartPrices(...prices){  // without ... it will take only first value and ignore the rest
    return prices
}

// const cart = [100, 200, 300, 400, 500];
console.log(cartPrices(100, 200, 300, 400, 500)); 