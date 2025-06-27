// Robot Constructor
function Robot(name, type) {
    //properties
    this.name = name;
    this.type = type;

    this.introduce = function (){
        console.log(`I am ${this.name}, a ${this.type} robot.`)
    }
}

const robot1 = new Robot("Optimus", "Leader");

robot1.introduce();

const robot2 = new Robot("ChatGPT", "Gen AI")

robot2.introduce();

// WAP for a coffer order constructor
function CoffeeOrder(customerName, size, type){
    this.customerName = customerName;
    this.size = size;
    this.type = type;

    //add "serve" function - Hello name, your size type is ready - Present all details
     this.server = function(){
            console.log(`Hello, ${customerName}, your ${size} ${type} is ready.`)
        }
}

const order1 = new CoffeeOrder("John", "tall", "Latte");
order1.server;


// // WAP for a Pizza Builder Constructor
