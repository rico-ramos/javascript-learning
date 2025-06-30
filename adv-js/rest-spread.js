//COMPLETE BELOW - spread operator
// Rest ...args : Gathers remaining arguments into an array.
// Used in function parameters
// Rest parameter in banking function

function totalDeposits(...amounts){
    console.log(amounts);
    return amounts.reduce((sum, amount)=> sum + amount, 0);

}

console.log(
    totalDeposits(10000, 20000, 30000, 50000)
)


function createTransaction(type, amount, ...tags){
    return {
        type, amount, tags
    }
}

console.log(createTransaction("Debit", 10000, "Food", "Travel", "Business", "Drinks"));

// Spread ...arr
// Spreads out (expands) elements of an array/object
//Used in function calls or obj/array cloning


const bankAccount = {}
const userInfo = {}

const fullAccount = {...bankAccount, ...userInfo};
console.log(fullAccount);

//function maxtTransaction


//const txns = [4000, 15000, 6000]