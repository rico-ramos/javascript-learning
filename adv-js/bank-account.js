// Simply banking ap using fuctnion expression
//bank account object

const bankAccount = {
    accountHolder: "john doe",
    balance: 10000
}

const deposit = function(amount){
    if (amount <= 0){
        console.log('invalid deposit amount.')
        return;
    }
    bankAccount.balance += amount
    console.log(`${bankAccount.accountHolder} depostited $${amount}.`);
    console.log(`The updated balance is $${this.balance}.`);
}

// withdraw
const withdraw = function(amount){
    if(amount>bankAccount.balance){
        console.log(`Insufficient funds for ${this.accountName}.`)
        return false;
    } else {
    this.balance = this.balance - amount; // same as --> this.balance -= amount
    console.log(`${this.accountName} withdrew $${amount}.`);
    console.log(`The updated balance is $${this.balance}.`);
    }
    
}

//check balance
const checkBalance = function(){
    
}

checkBalance(); 