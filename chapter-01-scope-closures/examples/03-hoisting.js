// Example 03 - Hoisting 

// ------ Var: hoisted with undefined -------
console.log(name); // undefined - no error! 
var name = "Junior"; 
console.log(name); // Junior 

// What JS sees under the hood:
// var name;                -> declaration hoisted to the top 
// console.log(name)        -> undefined 
// name = "Junior"          -> assignment stays in place 
// console.log(name)        -> "Junior"

// ------ Let: hoisted but in the temporal dead zone --------- 

try {
    console.log(city); // ReferenceError
    let city = "São Paulo";
} catch(error){
    console.log("Error:", error.message)
}

// ------- Const: same as let --------

try {
    console.log(country); // ReferenceError
    const country = "Brasil"; 
} catch(error){
    console.log("Error:", error.message);
}