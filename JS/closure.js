function init(){
    var firstName = "John";
    function sayHello() {
        var lastName = "Doe";
        console.log("Hello, " + firstName + " " + lastName);
    }
    sayHello();
}

var value=init();
//console.log(value); // undefined, because init() does not return anything


function doadd(x){
    return function(y){
        return x + y;
    }
}

console.log(doadd(5)(10)); // 15

var add5 = doadd(5);
console.log(add5(20)); // 15
//console.log(add5); // 25

/*

Why Closures Matter
Maintain private state without globals or classes.

Encapsulate logic and prevent unwanted access from outside code 


Enable functional patterns like currying, partial application, and callbacks 

“A closure is a function bundled together with references to its surrounding state (lexical environment)” – MDN-style

*/