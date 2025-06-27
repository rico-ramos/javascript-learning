// Our exercise

// WAP for Laundrying an array, add elements, iterate, finally in reverse order
let clothes = [];
clothes.push("socks");
clothes.push("t-shirt");
clothes.push("pants");
clothes.push("underwear");
clothes.push("sweatshirt");

clothes.pop();
clothes.forEach(function(clothes, index){
    console.log(`Washed your ${clothes}`);
});

console.log(clothes);

clothes.reverse(); //reverse

console.log(clothes);

console.log("====================");

// WAP for zombies apocalypse survival kit
let survivalKit = [];
//add items
//iterate
//reverse

survivalKit.push("knife");
survivalKit.push("flint");
survivalKit.push("ammo");
survivalKit.push("gun");
survivalKit.push("food");
survivalKit.push("gas");
survivalKit.push("water");

console.log(survivalKit);

survivalKit.pop();

console.log("We lost the water in our last trip.")

console.log(survivalKit);

console.log("water found");

survivalKit.unshift("H2O")

console.log(survivalKit);


