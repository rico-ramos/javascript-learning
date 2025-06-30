// In Javascript you can assign default values to function params so that if no value is passed,
// the default will be used. 
// Best practice is to define the default parameters at the end of the parameter declaration

function showMessage(name, message=", you are welcome."){
        console.log(name+message);
}

showMessage("John"); // Hello
showMessage('Hello Customer!'); // Hello Customer

// Create bank account
function createAccount(name, balance, type="Saving"){
    console.log(`${name} opened a ${type} and balance ${balance}`)
}
createAccount("alex", 40000);
createAccount("alex", 40000, 'Credit')