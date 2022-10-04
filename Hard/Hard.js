//Example of a closure 
//Makes it so data can't be accessed unless using the function said data belongs to 

// let name = 'John';

// function greeting() { 
//     let message = 'Hi';
//    //closed functions can use variables on it's outer scope
//     console.log(message + ' '+ name);
// }

function person() {
    let pii = {
        fName: "James",
        ssn: 123456789
    };
    return pii;
};
let person1 = person();
console.log(person1.fName);
