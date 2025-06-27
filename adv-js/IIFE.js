// Runs immediately after defining - no need to call function
// syntax :
(function(){
    //logic
})();

// initialize data, run setup code, create 

(function(){
    //code initialization
    // console.log('Bank system initialized at : ' + '')
})();


//private Interest Rate Calc
const interest = (fuction(){
    const rate = 5; //private value
    return function(principal, years){
        return (principal * rate * years) / 100;
    }
})();


//rate hidden from outer scope 
console.log(interest(10000, 2));


// Geenrate unique account ID (sefl-contained)
const accountID = (function(){
    const prefix = "BANK"; //private
    const randomNo = Math.floor(Math.random() * 100000);
    return  prefix + randomNo
    
})();