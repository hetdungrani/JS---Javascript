// let a=1
// const b=2
// var c=3

// console.log(a) // 1
// console.log(b) // 2 
// console.log(c) // 3


if(true){
    let a=4
    const b=5
    var c=6 
    console.log("INNER :" ,a)
}

console.log(a) // a is defined in inner scope, which is not accessible
console.log(b) // b is defined in inner scope, which is not accessible
console.log(c) // 6 is defined in inner scope, but var is function scoped, so it is accessible outside the block, Therefore it is not recommended to use var.