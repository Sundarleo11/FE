

console.log(this);

const Person = {
    name: "suriya",
    age: 18
}

// console.log(Person);
// console.log(this.Person);
// console.log(this.Person.name);
// console.log(this.Person.age);


class Vehicle {

    constructor() {
        this.bike = {
            color: "red",
            price: 1000
        }

        console.log(this.bike);
        this.bike.color = "blue";

    }




}

new Vehicle();


//for reqular function call method this point of window always
// exception case arrow function won't give this windows 


var user = {
    name: "sundar",
    courseCount: 34,
    getcourseCount: function () {
        console.log("Line 44", this);
        function sayHello(){
            console.log("Line 45", this)
        }

        //sayHello = () => (console.log("Line 45", this))

        sayHello()
    }


}

user.getcourseCount()