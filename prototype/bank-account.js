let newBankAccount = BankAccount 

function BankAccount (accountName, balance){
    this.accountName = accountName;
    this.balance = balance;
}

// Shared method using prototype
BankAccount.prototype.deposit = function(amount){
    if(amount>this.balance){
        console.log(`Insufficient funds for ${this.accountName}.`)
        return false;
    } else {
    this.balance = this.balance + amount; // same as --> this.balance += amount
    console.log(`${this.accountName} depostited $${amount}.`);
    console.log(`The updated balance is $${this.balance}.`);
    }
    
}

BankAccount.prototype.withdraw = function(amount){
    if(amount>this.balance){
        console.log(`Insufficient funds for ${this.accountName}.`)
        return false;
    } else {
    this.balance = this.balance - amount; // same as --> this.balance -= amount
    console.log(`${this.accountName} withdrew $${amount}.`);
    console.log(`The updated balance is $${this.balance}.`);
    }
    
}

const joe = new BankAccount("Joe", 50000);
console.log(joe);
joe.deposit(10000);

console.log("--------------------");

const alex = new BankAccount("Alex", 20000);
console.log(alex);
alex.withdraw(10000);
alex.withdraw(15000);