// special type of function used to create objects with the new keyword
// Constructors should start with CAPS

function Person(name, age, gender){
    //properties
    this.name = name;
    this.age = age;
    this.gender = gender;

    // functions
    this.showAge = function(){
        return this.age;
    };

    this.showDetails = function (){
        console.log(`
        The person's details are:
        Name : ${person1.name}
        Age : ${person1.age}
        Gender : ${person1.gender}
    `)

    }
}

// create objects
const person1 = new Person("Alex", 25, "male");
console.log(person1);

console.log(`
    The person's details are:
    Name : ${person1.name}
    Age : ${person1.age}
    Gender : ${person1.gender}
    `)

const person2 = new Person("Mia", 34, "femail");

console.log(`
    The person's details are:
    Name : ${person1.name}
    Age : ${person1.age}
    Gender : ${person1.gender}
    `);


person1.showDetails();