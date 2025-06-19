
console.log("==================");
// console.log(document);
console.log("==================");

// Access element by id
let title = document.getElementById("main-title");
title.innerText = "Hello DOM World";
title.style.color = "blue";
title.style.fontSize="4em";
title.style.fontStyle="Italic";


// Access by Class : returns collection of elements
let paras = document.getElementsByClassName("para-info");
console.log(paras);
let para1 = paras[0];
let para2 = paras[1];


para1.innerText = "This is the first paragraph."
para2.innerText = "This is the second paragraph."

para1.style.color = "green";
para1.style.color = "green";


console.log(para1);
console.log(para2)


console.log(para1);
console.log(para2);
// console.log(title);

// // 3. Access by Tag Name : retuns a collection of 
let items = document.getElementsByTagName("li");
for(let i = 0; i<items.length; i++) {
    items[i].style.color = "purple";
}

// // 4 Query Selector - first match only
// let firstItem = document.querySelector(".para-info");
// console.log(firstItem);

// // 5 Query selector All - affects all matches
// let firstItem = document.querySelectorAll(".para-info");


