let switchBtn = document.getElementById("switch");
let bulb = document.getElementById("bulb");

//add click action -  addEventListener(action, event to perform/logic to do)
switchBtn.addEventListener("click", ()=>{
    if(bulb.style.backgroundColor==="yellow"){
        bulb.style.backgroundColor==="black";

        switchBtn.innerText= "Turn On";
    } else {
        bulb.style.backgroundColor = "yellow";
        switchBtn.innerText = "Turn off the light"
        
    }
});