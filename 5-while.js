// While loop runs until condition is true <<-----------
// while(condition === true) { 
        // [do this]
// }

// let milkContainer = 3;
// while(milkContainer>0) {     //Infinity loop (avoid)
//     console.log("The cat drinks milk");
//     console.log("Liters left: " + milkContainer)
// }
let milkContainer = 3;
while(milkContainer>0) {    
    console.log("The cat drinks milk");
    console.log("Liters left: ", milkContainer);
    --milkContainer; 
}
console.log("The cat is out of milk.");

console.log("================================");
let dogs = 5;
while(dogs > 0) {
    console.log("One dog runs away.")
    --dogs;
    console.log(dogs + " dogs left.");
}
console.log("================================");

//do-while - always runs at least once, even if condition is false
// let pages = 0;
// do { 
//     console.log("Reading page "+ pages);
//     pages++
// } while(pages<3)

//     console.log("Student fell asleep.");

// do-while ------------------ ver2 --------
let pages = 3;
do { 
    console.log("Pages left "+ pages);
    pages--
} while(pages<0)

    console.log("All done reading.");

console.log("================================");
