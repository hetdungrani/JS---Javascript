let uName = new String("Het");

console.log(uName.__proto__);
console.log(uName.length);
console.log(uName.toUpperCase());
console.log(uName.charAt(2));
console.log(uName.indexOf("H"));
console.log(uName.substring(0, 4));
console.log(uName.slice(-2, 4)); // start from negative index
console.log(uName.trim()); // remove extra space
console.log(uName.replace("H", "h"));
