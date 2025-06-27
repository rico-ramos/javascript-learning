/**
 * Calculate age
 * @param {*} yearOfBirth 
 * @returns age
 */

function ageCalculator(yearOfBirth){
    let currentYear = 2025;
    let age = currentYear - yearOfBirth;
    // console.log("Your age is "+ age);
    return age; //The function stops executing immediately
}

function retirementCalculator(yearOfBirth){
    let retirementAge = 62;
    let currentYear = 2025;
    let age = currentYear - yearOfBirth;
    let yearsToRetirement = retirementAge - age;

    if(age<retirementAge){
        console.log("Not time to retire yet. You have " + yearsToRetirement + " years left.")
    } else if (age>retirementAge) {
        console.log("You're already retired or are past the age of retirement")
    }
  

}

// The value specified after the return is sent back to the place where the function was called.
let age1 = retirementCalculator(1983);
// let age2 = ageCalculator(1984);
// let age3 = ageCalculator(1985);
// console.log(age1);
// console.log(age2);
// console.log(age3);


// ageCalculator(1883);
// ageCalculator(1983);
// ageCalculator(1783);

// ageCalculator();  //Results Nan or "not a number"