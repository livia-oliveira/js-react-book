// Example 04 - Closures

// ---- Basic closure: a function that "remembers" its scope ----
function createCounter(){
    let count = 0; // lives in createCounter's scope

    return function () {
        count++; // inner function rememebers count 
        console.log(count);
    }; 
}

const counter = createCounter(); 
// createCounter already finished running... 
// but count is still alive, trapped in the closure  

counter(); // 1
counter(); // 2 
counter(); // 3 

// ---- Closures create private data ----
function createUser(name) {
    let _password = "secret123"; // private, not accessible from outside

    return {
        getName: () => name, 
        validatePassword: (attempt) => attempt === _password, 
    };
}

const user = createUser("Junior"); 
console.log(user.getName()); // "Junior"
console.log(user.validatePassword("wrong")); // false
console.log(user._password); // undefined - no direct access 

// ---- Closure with loop: the classic bug ----
console.log("--- bug: shared var --- "); 
const functions = []; 
for(var i = 0; i < 3; i++) {
    functions.push(() => console.log(i)); 
}

functions[0](); // 3
functions[1](); // 3
functions[2](); // 3

console.log("--- fixed with let ---"); 
const functions2 = []; 
for(let j = 0; j < 3; j++){
    functions2.push(() => console.log(j)); 
}
functions2[0](); // 0
functions2[1](); // 1
functions2[2](); // 2

console.log("--- fixed with IIFE (old pattern, before let ---)"); 
const functions3 = []; 
for(var k = 0; k < 3; k++){
    functions3.push(
        (function (n) {
            return () => console.log(n); 
        })(k)
    );
}
functions3[0](); // 0
functions3[1](); // 1
functions3[2](); // 2