
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
};

item[0].style.fontWeight='bold';
item[1].style.fontStyle='italic';
// console.log(item.length);
for(let i = 0; i<item.length; i++){
    item[i].style.fontSize='1em';
    console.log(item[i].innerText, 'size updated.');
    console.log(item.length, i);
};


// 4. Access by Query Selector : returns the first match
let firstItem = document.querySelector(".item");
console.log(firstItem);
firstItem.style.backgroundColor="lightyellow";

let firstItem1 = document.querySelector(".para-info");
console.log(firstItem1);
firstItem1.style.backgroundColor="lightyellow";
firstItem1.style.padding = "10px";
firstItem1.style.border = '1px solid orange';
firstItem1.innerText += ' - Selected by Query Selector!';

// 5. Access by Query Selector All : returns a collection of elements
let allItems = document.querySelectorAll('li');
allItems.forEach((item, index) => {
    item.style.backgroundColor = 'lightblue';
    item.style.margin = '5px';
    item.style.padding = '10px';
    item.innerText += ` item ${index + 1}`
    item.innerText += ' - Selected by querySelector all'
});


