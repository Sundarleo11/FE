var user={
    name:'',
    getcourse:function(course){
        return `${this.name} is enrolled in the ${course} course.`;
    }
}

var user1=Object.create(user);
user1.name='John Doe'; 

console.log("user1 ",user1);
console.log(user.getcourse("test"));