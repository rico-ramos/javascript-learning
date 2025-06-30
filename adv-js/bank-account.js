// Simply banking ap using function expression
//bank account object

const bankAccount = {
    accountHolder: "John Doe",
    balance: 10000
};

//Deposit
const deposit = function(amount){
    if (amount <= 0){
        console.log('Invalid deposit amount.')
        return;
    }
    bankAccount.balance += amount
    console.log(`${bankAccount.accountHolder} depostited $${amount}.`);
    console.log(`The updated balance is $${bankAccount.balance}.`);
}

// Withdraw
const withdraw = function(amount){
    if(amount>bankAccount.balance){
        console.log(`Insufficient funds for ${bankAccount.accountHolder}.`)
        return false;
    } else {
    bankAccount.balance = bankAccount.balance - amount; // same as --> this.balance -= amount
    console.log(`${bankAccount.accountHolder} withdrew $${amount}.`);
    console.log(`The updated balance is $${bankAccount.balance}.`);
    }
    
}

//check balance
const checkBalance = function(){
    console.log(`Current balance: $${bankAccount.balance}.`)
}

checkBalance(); 
deposit(10000);
withdraw(80000);
checkBalance(); 