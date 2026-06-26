// Example 06 - bind, call and apply

// ---- BIND: creates a new function with "this" permanently fixed ----
const person = { name: "Mateus" }; 

function greet(city) {
    console.log(`Hello, I'm ${this.name} from ${city}`); 
}

const greetMateus = greet.bind(person); 
// bind creates a NEW function where this = person (permanently)

greetMateus("Goiás"); 
greetMateus("Tocantins"); 

// ---- CALL: calls the function NOW with a specific "this" ----
const dev1 = { name: "Mateus", level: "senior" }; 
const dev2 = { name: "João Pedro", level: "pleno" };

function introduce(company){
    console.log(`${this.name} (${this.level}) at ${company}`); 
}

introduce.call(dev1, "Fogareu"); // "Mateus (senior) at Fogareu"
introduce.call(dev2, "XP"); // "João Pedro(pleno) at XP"

// ---- APPLY: same as call, but arguments in an array ----
const args1 = ["Fogareu"]; 
const args2 = ["XP"]; 

introduce.apply(dev1, args1); // "Mateus" (senior) at Fogareu 
introduce.apply(dev2, args2); // "João Pedro (pleno)  at XP"

// ---- Real use case: borrowing methods from outher objects ----
const person1 = { name: "Laura", company: "Starklocs"}; 
const person2 = { name: "Mateus", company: "Atreus" };

function presentWithCompany() {
    console.log(`${this.name} works at ${this.company}`); 
}

// Same function, different objects
presentWithCompany.call(person1); // "Laura works at Starklocs"
presentWithCompany.call(person2); // "Mateus works at Atreus"

// ---- Why bind is used in React classes ----
class Button {
    constructor(label) {
        this.label = label; 
        this.handleClick = this.handleClick.bind(this); 
        // Fix "this" to the instance, so it works when passed as callback
    }

    handleClick() {
        console.log(`Button "${this.label}" was clicked`); 
    }
}

const button1 = new Button("Send"); 
const button2 = new Button("Cancel"); 

// Even when passed as a callback, "this" is still the instance 
const callback1 = button1.handleClick; 
const callback2 = button2.handleClick; 

callback1(); // "Button "Send" was clicked" (this = button1)
callback2(); // "Button "Cancel" was clicked" (this = button2)