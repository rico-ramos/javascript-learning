// While loop runs until condition is true
// while(condition === true) {
// }

// let milkContainer = 3;
// while(milkContainer>0) {     //Infinity loop (avoid)
//     console.log("The cat drinks milk");
//     console.log("Liters left: " + milkContainer)
// }
let milkContainer = 3;
while(milkContainer>0) {     //Infinity loop (avoid)
    console.log("The cat drinks milk");
    console.log("Liters left: ", milkContainer);
    --milkContainer;
}
console.log("The cat is out of milk.");

//do-while - always runs at least once, even if condition is false
let pages = 0;
do { 
    console.log("Reading page "+ pages);
    pages++
} while(pages<3)

    console.log("Student fell asleep.");