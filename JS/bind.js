var user={
    firstname:"sundar",
    lastname:"pitchai",
    coursecount:5,
    getcourseInfo(){
        console.log(`
            user name ${this.firstname+''+this.lastname},
            that course count was ${this.coursecount}          
            `);
        
    }
}

var dev={
    firstname:"dev user firstname",
    lastname:"dev user lastname",
    coursecount:5
}

//user.getcourseInfo.bind(dev)(); //one way
//bind 
///var use1=user.getcourseInfo.bind(dev);
//use1()
//call
//user.getcourseInfo.call(dev);
user.getcourseInfo.apply(dev);

/*
| Method  | Calls Immediately? | `this` Binding | Arguments Format      | Returns         |
| ------- | ------------------ | -------------- | --------------------- | --------------- |
| call()  | ✅ Yes              | Specified      | Individual parameters | Original result |
| apply() | ✅ Yes              | Specified      | Array of parameters   | Original result |
| bind()  | ❌ No (deferred)    | Specified      | Individual + optional | New function    |


Use-Case Scenarios

call() – When you want to immediately invoke a function with a custom this.

apply() – Similar to call(), but useful if your args are already in an array.

bind() – When you need a reusable function with a fixed context (especially for callbacks/event handlers).

*/
