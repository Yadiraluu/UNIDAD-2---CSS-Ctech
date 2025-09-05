let lastItem = fruits.pop()   
console.log(fruits)

fruits.unshift("kiwi")
console.log(fruits)

fruits.shift()
console.log(fruits)

console.log(fruits.includes("fresa"));
console.log(fruits.includes("naranja"));

console.log(fruits.indexOf("pera"));
console.log(fruits.indexOf("arandano"));
console.log(fruits.indexOf("sandia"));

let fruitsStrinng = fruits.join()
console.log(fruitsStrinng);

console.log(fruits.join(" - "));
console.log(fruits. join(" "));
console.log(fruits.join("."));

let slicedFruits = fruits.slice(3)
console.log(slicedFruits);
console.log(fruits);

console.log(fruits.slice (1, 4));

console.log("splice");

fruits.splice(2, 1, "mandarina", "coco", "granada", "mango")
console.log(fruits);
//matemática//
let nums = [3, 5, 7, 9, 11]
console.log(nums);
let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map ((x) => Número ${x});
console.log(numsToString);

let filteredNums = nums.filter((x) => x > 6);
console.log(filteredNums);

let sumOfALLElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfALLElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

console.log("Objeto Math");

console.log("Math.round()");
console.log(Math.round(14.3));
console.log(Math.round(14.8));

console.log("Math.ceil()");
console.log(Math.ceil(14.3));

console.log("Math.floor()");
console.log(Math.floor(14.8));