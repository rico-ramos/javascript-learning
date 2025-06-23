//destructuring arrays

const array = [1,2,3];

//manuallyh destructuring
const firsts = array[0];


//useing destructuring assignement
const [frist, second, third] = array;


//extract values from object using destructions
const person = {
    name: 'Alice',
    age: 30,
    city: 'wonderland'
}

// const name = person.name;
// const age = person.age;
// const city = person.city;
// console.log(name, age, city); 

const{name,age,city} = person
console.log(name, age, city);
