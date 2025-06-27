let obj = new Object(
    {
        name: "John"
    }
);
console.log(obj);

function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    // Every instance gets its own copy
    this.greeting = function(){
        console.log(`My name is ${name}.`)
    }
}

let personObj1 = new Person("Jon Doe", 40, 'male');
// instance-level property
personObj1.email = "jonD@gmail.com"
console.log(personObj1);
console.log(personObj1.greeting())

//using prototype - 
// All instacnes sahre the same getLanguage fuction from the prototype
Person.prototype.language = "English" //Creates language as a protoytpe property/'template property'
Person.prototype.getLanguage = function(){
    console.log(`My language is ${this.language}`)
}

let personObj2 = new Person("Sarah Doe", 38, 'female');
console.log(personObj2);
console.log(personObj2.greeting());
console.lo