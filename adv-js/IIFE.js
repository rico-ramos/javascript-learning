// IIFE Runs immediately after it is defined - no need to call function
// syntax :
(function(){
    //logic
})();

// Used initialize data, run setup code, create private scope

(function(){
    //code initialization
    console.log('Bank system initialized at : ' + new Date().toLocaleString())
})();


//private Interest Rate Calculation
const interest = (function(){
    const rate = 5; //private value
    return function(principal, years){
        return (principal * rate * years) / 100;
    }
})();


//rate hidden from outer scope 
console.log(interest(10000, 2));


// Generate unique account ID (sefl-contained)
const accountId = (function(){
    const prefix = "BANK"; //private value
    const randomNo = Math.floor(Math.random() * 100000);
    return  prefix + randomNo;

})();

console.log("Generated Account ID: ", accountId)