// Example 02 - var, let and const 

// Var -> function scope, leaks from blocks

function varExample(){
    if(true) {
        var x = 10; 
    }
    console.log(x); 
}
varExample(); 

// Let -> block scope
function letExample(){
    if(true){
        let y = 10;
    }

    // console.log(y); ReferenceError: y is not defined 
}
letExample(); 


// The classic bug with var 
console.log("------ var in loop (bug) ------"); 
for (var i = 0; i < 3 ; i++){
    setTimeout(() => console.log(i), 0); 
}

// prints: 3, 3, 3

// Fixed whith let 

console.log(" --- let in loop (fixed) ---"); 
for( let j = 0; j < 3; j++){
    setTimeout(() => console.log(j), 0); 
}
// prints: 0, 1, 2

// --- Const: not reassingnable ---
const person = { name: "Junior" }; 
person.name = "Gabriela"; // works - changed the property, not the variable 
// person = {} TypeError - cant´t reassign the variable 
console.log(person.name) // Gabriela