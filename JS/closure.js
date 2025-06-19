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