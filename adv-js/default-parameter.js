// In you can assign default values to function params so that if no value is passed,
// the default will be used.

function showMessage(message="Hello"){
        console.log(message);
}

showMessage(); // Hello
showMessage('Hello Customer!'); 

// Create bank account
function createAccount(name, balance, type="Saving"){
    console.log(`${name} opened a ${type} and balance ${balance}`)
}
createAccount("alex", 40000);
createAccount("alex", 40000, 'Credit')