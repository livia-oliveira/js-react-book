
//Example 01 

// Global scope 
const name = "Junior"; 

function greet() {
    // Function scope
    const message = "Hello, " + name; 
    console.log(message);   
}

greet(); // "Hello, Junior"
//console.log(message); // ReferenceError: message is not defined