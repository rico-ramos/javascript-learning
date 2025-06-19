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

//Remove the bottom bun (first element)
burger.shift(); 

//remove top bun (last element)
burger.pop();

//Add bottom bun
burger.unshift('bottom bun')
burger.push('top bun')

// Reverve burger order
burger.reverse();

 // Display final burger
console.log("Burger :", burger);

//