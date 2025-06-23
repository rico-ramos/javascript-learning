let switchButton = document.getElementById("switch");
let bulb = document.getElementById("bulb");

switchButton.addEventListener("click", ()=> {
    console.log("Button clicked!");
    if (bulb.style.backgroundColor==='yellow') {
        bulb.style.backgroundColor='black';
        switchButton.innerText = 'Turn On the Light';
    } else {
        bulb.style.backgroundColor = 'yellow';
        switchButton.innerText = 'Turn Off the Light';
    }
})