//import User from "./class";
const User= require('./class')

const user1=new User("siva","abc@gmail.com");

console.log(user1.getinfo());
user1.enrollCourse("Angular");
user1.enrollCourse("React js");
console.log(user1.getCourseList());

