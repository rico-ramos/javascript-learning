let clickMeBtn = document.getElementById("click-me");
let clickMe2Btn = document.getElementById("click-me-2");

clickMeBtn.addEventListener('click', ()=>{
    console.log("button clicked!");
});

 clickMe2Btn.style.backgroundColor = 'blue';
    clickMe2Btn.style.color = 'white';

clickMe2Btn.addEventListener('mouseover', ()=>{
    clickMe2Btn.style.backgroundColor = 'white';
    clickMe2Btn.style.color = 'black';
})

clickMe2Btn.addEventListener('mouseout', ()=>{
    clickMe2Btn.style.backgroundColor = 'blue';
    clickMe2Btn.style.color = 'white';
});

clickMe2Btn.addEventListener('click', ()=>{
    console.log("button 2 clicked");
})

// //or
// clickMeBtn.addEventListener('', function(){
//     console.log("button clicked!");
// });

// clickMeBtn.addEventListener('', clickme{
//     console.log("button clicked!");
// })