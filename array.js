let arr = [1, 3, 'het']

console.log(arr.pop(4)    )  // remove last value
console.log(arr.push(5)   )  // add at last place
console.log(arr.unshift(9) )  // add from start
console.log(arr.shift()    )  // remove first value

let arr1 = [1, 2, 3, 4, 5]
console.log(arr1.slice(1, 3))  // return new array from index 1 to 3

let arr2 = [1, 2, 3, 4, 5]
console.log(arr2.splice(1, 3))  // remove from index 1 to 3 and return new array
console.log("A", arr1, "B", arr2) 
let arr3 = [1, 2, 3, 4, 5]

//slice does not change the original array 
//splice does change the original array