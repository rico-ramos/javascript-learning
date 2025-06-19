// spread operator example
const fruits = ['apple', 'banana', 'cherry']
console.log(fruits)

const copyFruits = [...fruits];


const moreFruits = ['orange', 'grapes'];
const allFruits = [...fruits, ...moreFruits];

// printFruits(...allFruits);


const newFruits = ["kiwi", ...fruits, "mango"];
console.log(newFruits);

const fruitDetails = { type: 'tropical', color: 'yellow'};
const newFruitDetails = {...fruitDetails, name: 'banana', taste: 'sweet' }
console.log(newFruitDetails);

