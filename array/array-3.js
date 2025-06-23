// Write example of user Array in Javascript to create burger.

//bottom bun, lettuce, patty, cheese, sauces, top bun

let burger = [];

//add ingredients
burger.push('Bottom Bun');

burger.push('tomoato');
burger.push('cheese');
burger.push('patty');
burger.push('Lettuce');
burger.push('top bun');

//removing tomator from burger // syntax: splice(start: number, deleteCount?: number): string[]
burger.splice(2, 1, 'bacon'); // removes tomato and adds bacon
burger.splice(3, 1, 'more bacon') // removes tomato and adds bacon
 burger.splice(4, 1,) // removes index 4 (lettuce)

//Remove the bottom bun 
burger.shift(); // removes first element)

//remove top bun (last element)
burger.pop(); // removes last

//Add bottom bun
burger.unshift('bottom bun') // adding element to beginning
burger.push('top bun') // adds element to the end of array

// Reverve burger order
burger.reverse();

 // Display final burger
console.log("Burger :", burger);

//