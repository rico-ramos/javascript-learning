console.log("====================");
// WAP for super heroes - make a list and their powers

let avengers = [];

// adding to the team
avengers.push({name: "Spiderman", power: "web-slinging", gender: "male"});
avengers.push({name: "Hulk", power: "Super strength", gender: "male"});
avengers.push({name: "Ironman", power: "genius with armor", gender: "male"});
avengers.push({name: "Doctor Strange", power: "mystical arts", gender: "male"});
avengers.push({name: "Hawkeye", power: "expert archer", gender: "male"});
avengers.push({name: "Captain America", power: "super soldier with enhanced abilities", gender: "male"});
avengers.push({name: "Thor", power: "", gender: "male"});
avengers.push({name: "Black Widow", power: "", gender: "female"});
avengers.push({name: "Black Panther", power: "", gender: "male"});

// Display Avengers Team 
console.log(avengers);

//iterating over
// avengers.forEAch

// Check whether ironman is on the teamn
// for (let meme)

// Check whether Hulk is on team 
// avengers.some(member => {
//     if (member.name == "Hulk")
// });

// let isCap

//Filtering members based on gender
let femaleSuperheroes = avengers.filter(member => member.gender === "female");
console.log(femaleSuperheroes);