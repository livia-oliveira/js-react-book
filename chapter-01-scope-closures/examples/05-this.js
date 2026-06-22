// Example 05 - The "this" keyword 

// ---- Rule 1: object method - "this" is the object ----
const person = {
    name: "Mateus",
    greet(){
        console.log("Hello, " + this.name);
    },
}

person.greet(); // "Hello, Mateus" - this is person 

// ----Rule 2: standalone function - "this" loses context ----
const greetFn = person.greet; 
greetFn(); // "Hello, undefine" - this is no longer person 

// ---- Rule 3: arrow function - "this" is lexical (from outer scope) ----
const person2 = {
    name: "Laura", 
    greetArrow: () => {
        console.log(this.name); // undefined - arrow takes "this" from outside(global)
    }, 
    greetCorrect() {
        const helper = () => {
            console.log(this.name); // "Laura" - takes "this" from greetCorrect
        }
        helper();
    },
};

person2.greetArrow(); // undefined
person2.greetCorrect(); // "Laura"